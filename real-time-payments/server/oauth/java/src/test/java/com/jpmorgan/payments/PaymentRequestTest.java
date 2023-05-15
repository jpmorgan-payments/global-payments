package com.jpmorgan.payments;


import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.TestPropertySource;

@TestPropertySource(locations = "classpath:test/application.properties")
class PaymentRequestTest {

    private PaymentRequest paymentRequest;
    private HttpClient httpClient;
    private HttpResponse<String> httpResponse;


    @BeforeEach
    void setUp() {
        httpClient = mock(HttpClient.class);
        httpResponse = mock(HttpResponse.class);
        paymentRequest = new PaymentRequest(httpClient);
    }

        @Test
        void testRequest() throws Exception {
            String accessToken = "access_token";
            String expectedResponseBody = "Response body";

            // Build the request URI
            URI requestUri = URI.create(PaymentRequest.PAYMENT_BY_FIRM_ID_LINK);

            // Build the expected request with the access token in the header
            HttpRequest expectedRequest = HttpRequest.newBuilder()
                    .uri(requestUri)
                    .header("Authorization", "Bearer " + accessToken)
                    .method("GET", HttpRequest.BodyPublishers.noBody())
                    .build();

            // Mock the behavior of HttpClient
            when(httpClient.send(eq(expectedRequest), any(HttpResponse.BodyHandler.class)))
                    .thenReturn(httpResponse);

            // Mock the behavior of HttpResponse
            when(httpResponse.body()).thenReturn(expectedResponseBody);

            // Call the method under test
            String result = paymentRequest.request(accessToken);

            // Verify the interactions and assertions
            verify(httpClient).send(eq(expectedRequest), any(HttpResponse.BodyHandler.class));
            verify(httpResponse).body();

            // Assert the result
            assertEquals(expectedResponseBody, result);
        }


    @Test
    void testRequest_unvalidAccessToken_errorMessage() throws IOException, InterruptedException {
        String expectedResponseBody = "{\"Message\":\"User is not authorized to access this resource with an explicit deny\"}";
        String accessToken = "notValidToken";

        // Mock the behavior of HttpClient to return a non-null HttpResponse
        when(httpClient.send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class)))
                .thenReturn(httpResponse);

        // Mock the behavior of HttpResponse
        when(httpResponse.body()).thenReturn(expectedResponseBody);

        // Call the method under test
        String result = paymentRequest.request(accessToken);

        // Verify the interactions and assertions
        verify(httpClient).send(any(HttpRequest.class), any(HttpResponse.BodyHandler.class));
        verify(httpResponse).body();
        assertEquals(expectedResponseBody, result);
    }

}
