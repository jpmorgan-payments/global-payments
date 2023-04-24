package com.jpmorgan.payments;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;


import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;


import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class PaymentRequestTest {
    private PaymentRequest paymentRequest;
    private HttpClient httpClient;
    private HttpResponse httpResponse;

    @BeforeEach
    void setUp() {
        paymentRequest = new PaymentRequest();
        httpClient = mock(HttpClient.class);
        httpResponse = mock(HttpResponse.class);
    }

        @Test
        void testGetAccessToken_isNotNull() {
            String accessToken = paymentRequest.getAccessToken();
            assertNotNull(accessToken);
        }

    @Test
    void testPayment_returnsPaymentStatus() throws Exception {
        String expectedResponseBody = "{\"paymentStatus\":{\"createDateTime\":\"2021-09-22T00:00:12.145\",\"status\":\"COMPLETED\"}}";

        when(httpClient.send(
                HttpRequest.newBuilder()
                        .uri(URI.create("https://api-mock-akm-ptpoc.payments.jpmorgan.com/tsapi/v1/payments?firmRootId=596c0f34-7d7a-4f9b-b6f8-91704a63828a"))
                        .header("client_id", "0030000131")
                        .header("Authorization", "Bearer " + paymentRequest.getAccessToken())
                        .method("GET", HttpRequest.BodyPublishers.noBody())
                        .build(),
                HttpResponse.BodyHandlers.ofString())).thenReturn(httpResponse);
        when(httpResponse.body()).thenReturn(expectedResponseBody);

        String actualResponseBody = paymentRequest.payment();
        assertEquals(expectedResponseBody, actualResponseBody);
    }

    @Test
    void testRequest_returnsPaymentResponse() {
        String expectedResponseBody = "{\"paymentStatus\":{\"createDateTime\":\"2021-09-22T00:00:12.145\",\"status\":\"COMPLETED\"}}";
        String accessToken = paymentRequest.getAccessToken();
        when(httpResponse.body()).thenReturn(expectedResponseBody);
        assertEquals(expectedResponseBody, paymentRequest.request(accessToken));
    }

    @Test
    void testRequest_unvalidAccessToken_errorMessage() {
        String expectedResponseBody = "{\"Message\":\"User is not authorized to access this resource with an explicit deny\"}";

        String accessToken = "notValidToken";
        when(httpResponse.body()).thenReturn(expectedResponseBody);
        assertEquals(expectedResponseBody, paymentRequest.request(accessToken));
    }
}
