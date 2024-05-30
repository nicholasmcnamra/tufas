//package com.tufas.project.tufasgo.Security;
//
//import com.tufas.project.tufasgo.Repositories.CustomClientRegistrationRepository;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.oauth2.client.registration.ClientRegistration;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.security.oauth2.core.AuthorizationGrantType;
//import org.springframework.security.oauth2.core.ClientAuthenticationMethod;
//@Configuration
//public class OAuth2Configuration {
//    @Bean
//    public ClientRegistrationRepository clientRegistrationRepository() {
//        return new CustomClientRegistrationRepository();
//    }
//    @Value("${spring.security.oauth2.client.registration.google.client-id}")
//    private String clientId;
//    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
//    private String clientSecret;
//    @Value("${oauth2.authorization-url}")
//    private String authorizationURL;
//    @Value("${oauth2.token-uri}")
//    private String tokenURI;
//    @Value("${oauth2.redirect-uri}")
//    private String redirectURI;
//    private final String defaultScopes = "openid";
//
//    public OAuth2Configuration(
//            @Value("${spring.security.oauth2.client.registration.google.client-id}") String clientId,
//            @Value("${spring.security.oauth2.client.registration.google.client-secret}") String clientSecret,
//            @Value("${oauth2.authorization-url}") String authorizationURL,
//            @Value("${oauth2.token-uri}") String tokenURI,
//            @Value("${oauth2.redirect-uri}") String redirectURI) {
//        this.clientId = clientId;
//        this.clientSecret = clientSecret;
//        this.authorizationURL = authorizationURL;
//        this.tokenURI = tokenURI;
//        this.redirectURI = redirectURI;
//    }
//
//    @Bean
//    public ClientRegistration customClientRegistration() {
//        return ClientRegistration.withRegistrationId("google")
//                .clientId(clientId)
//                .clientSecret(clientSecret)
//                .clientAuthenticationMethod(ClientAuthenticationMethod.CLIENT_SECRET_BASIC)
//                .authorizationGrantType(AuthorizationGrantType.AUTHORIZATION_CODE)
//                .authorizationUri(authorizationURL)
//                .tokenUri(tokenURI)
//                .redirectUri(redirectURI)
//                .scope(defaultScopes)
//                .build();
//    }
//}
