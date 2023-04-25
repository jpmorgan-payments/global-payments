package com.jpmorgan.payments;

import org.junit.jupiter.api.Test;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collections;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

class OauthApplicationTest {

    @Test
    void user_ReturnsCorrectName() {
        // Arrange
        String username = "johndoe";
        OAuth2User mockPrincipal = mock(OAuth2User.class);
        when(mockPrincipal.getAttribute("name")).thenReturn(username);
        Map<String, Object> expectedResponse = Collections.singletonMap("name", username);

        // Act
        Map<String, Object> actualResponse = new OauthApplication().user(mockPrincipal);
        // Assert
        assertEquals(expectedResponse, actualResponse);
    }
}