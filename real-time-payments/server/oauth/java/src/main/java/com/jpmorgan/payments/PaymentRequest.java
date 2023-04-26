package com.jpmorgan.payments;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.Objects;

import net.minidev.json.JSONObject;
import net.minidev.json.parser.JSONParser;
import net.minidev.json.parser.ParseException;

@SpringBootApplication
@RestController
public class PaymentRequest {

    private static final String PAYMENT_BY_FIRM_ID_LINK = "https://api-mock-akm-ptpoc.payments.jpmorgan.com/tsapi/v1/payments";

    @Value("${access.token.link}")
    private String ACCESS_TOKEN_LINK;

    @Value("${username.value}")
    private String USER_NAME;

    @Value("${secret}")
    private String SECRET;

    public String getAccessToken() {
        // Build request to access token endpoint
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(ACCESS_TOKEN_LINK))
                .header("username", USER_NAME)
                .header("secret", SECRET)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = null;
        try {
            // Send request and get response
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        JSONParser parser = new JSONParser();
        JSONObject json = null;
        try {            // Parse JSON response and get access token

            json = (JSONObject) parser.parse(Objects.requireNonNull(response).body());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return json.getAsString("accessToken");
    }

    // HTTP GET endpoint to make payment request
    @GetMapping("/payment")
    public String payment() {
        String accessToken = getAccessToken();
        return request(accessToken);
    }

//    Makes API request using access token
    public String request(String accessToken) {
        // Build request to payment endpoint with access token
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(PAYMENT_BY_FIRM_ID_LINK))
                .header("Authorization", "Bearer " + accessToken)
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = null;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        return Objects.requireNonNull(response).body();
    }
}
