package com.tufas.project.tufasgo.Controllers;
import com.tufas.project.tufasgo.Security.JwtTokenResponse;
import io.jsonwebtoken.Jwts;
import com.tufas.project.tufasgo.Entities.User;
import com.tufas.project.tufasgo.Services.UserService;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClient;
import org.springframework.security.oauth2.client.OAuth2AuthorizedClientService;
import org.springframework.security.oauth2.client.authentication.OAuth2AuthenticationToken;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.Date;
import java.util.Map;

@RestController
@RequestMapping("/api")
public class UserController {
    private UserService service;
    private final OAuth2AuthorizedClientService clientService;
    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Autowired
    public UserController(UserService service, OAuth2AuthorizedClientService clientService, PasswordEncoder passwordEncoder) {
        this.service = service;
        this.clientService = clientService;
        this.passwordEncoder = passwordEncoder;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> index() {
        return new ResponseEntity<>(service.index(), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/user/{id}")
    public ResponseEntity<User> show(@PathVariable Long id) {
        return new ResponseEntity<>(service.show(id), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/users")
    public ResponseEntity<User> create(@RequestBody User user) {
        if (user.getPassword() == null || user.getUserName() == null || user.getEmail() == null) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return new ResponseEntity<>(service.create(user), HttpStatus.CREATED);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @PutMapping("/user/{id}")
    public ResponseEntity<User> update(@PathVariable Long id, @RequestBody User user) {
        return new ResponseEntity<>(service.update(id, user), HttpStatus.OK);
    }
    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping("/user/{id}")
    public ResponseEntity<Boolean> destroy(@PathVariable Long id) {
        return new ResponseEntity<>(service.delete(id), HttpStatus.OK);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/login/oauth2/code/google")
    public RedirectView loginSuccess(@PathVariable String provider, OAuth2AuthenticationToken authenticationToken) {
        OAuth2AuthorizedClient client = clientService.loadAuthorizedClient(
                authenticationToken.getAuthorizedClientRegistrationId(),
                authenticationToken.getName()
        );

        return new RedirectView("/login-success");
    }

//    @CrossOrigin(origins = "http://localhost:3000")
//    @PostMapping("/login")
//    public ResponseEntity<String> login(@RequestBody Map<String, String> requestBody) {
//        String accessToken = requestBody.get("accessToken");
//
//        // Verify access token with Google OAuth2 token validation endpoint
//
//        return ResponseEntity.ok("Received access token: " + accessToken);
//    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/login")
    public ResponseEntity<JwtTokenResponse> login(@RequestBody Map<String, String> requestBody) {
        String username = requestBody.get("username");
        String password = requestBody.get("password");
        try {
            // Retrieve user details by username
            UserDetails userDetails = userDetailsService.loadUserByUsername(username);

            // Check if password matches
            if (!passwordEncoder.matches(password, userDetails.getPassword())) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
            }

            // Create authentication token
            Authentication authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());

            // Set the authentication object in the SecurityContext
            SecurityContextHolder.getContext().setAuthentication(authentication);

            User currentUser = service.findByUsername(username);

            Date now = new Date();
            Date expiryDate = new Date(now.getTime() + 3600000);

            String token = Jwts.builder()
                    .setSubject(userDetails.getUsername())
                    .setIssuedAt(now)
                    .setExpiration(expiryDate)
                    .signWith(SignatureAlgorithm.HS512, jwtSecret)
                    .compact();

            // Create JwtTokenResponse object
            JwtTokenResponse tokenResponse = new JwtTokenResponse(token, "Bearer", currentUser.getUserId(), currentUser.getUserName(), currentUser.getFirstName(), currentUser.getLastName(), currentUser.getEmail());

            // Return JwtTokenResponse in response body
            return ResponseEntity.ok(tokenResponse);
        } catch (UsernameNotFoundException e) {
            // Handle user not found
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        } catch (Exception e) {
            // Handle other exceptions
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }
}
