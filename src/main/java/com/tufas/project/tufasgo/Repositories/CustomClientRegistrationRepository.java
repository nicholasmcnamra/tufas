//package com.tufas.project.tufasgo.Repositories;
//
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.context.annotation.Primary;
//import org.springframework.security.oauth2.client.registration.ClientRegistration;
//import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
//import org.springframework.stereotype.Component;
//
//@Primary
//@Component
//public class CustomClientRegistrationRepository implements ClientRegistrationRepository {
//
//    @Value("${spring.security.oauth2.client.registration.google.client-id}")
//    private String clientId;
//    @Value("${spring.security.oauth2.client.registration.google.client-secret}")
//    private String clientSecret;
//    @Value("${oauth2.authorization-url}")
//    private String authorizationURL;
//    @Value("${oauth2.token-uri}")
//    private String tokenURI;
//    @Override
//    public ClientRegistration findByRegistrationId(String registrationId) {
//        // Logic to retrieve client registration details based on the provided registration ID
//        if ("google".equals(registrationId)) {
//            return createGoogleClientRegistration();
//        }
//        // Handle other registration IDs if necessary
//        return null;
//    }
//    private ClientRegistration createGoogleClientRegistration() {
//        return ClientRegistration.withRegistrationId("google")
//                .clientId(clientId)
//                .clientSecret(clientSecret)
//                .authorizationUri(authorizationURL)
//                .tokenUri(tokenURI)
//                .build();
//    }
//}
