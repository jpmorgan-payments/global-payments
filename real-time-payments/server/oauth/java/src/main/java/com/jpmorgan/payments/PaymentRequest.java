package com.jpmorgan.payments;

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

    public String getAccessToken() {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://www-akm-ptpoc.payments.jpmorgan.com/token"))
                .header("username", "wptapieng")
                .header("secret", "YWRpdHlhMTIzNCFAIyQ=")
                .method("GET", HttpRequest.BodyPublishers.noBody())
                .build();
        HttpResponse<String> response = null;
        try {
            response = HttpClient.newHttpClient().send(request, HttpResponse.BodyHandlers.ofString());
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
        JSONParser parser = new JSONParser();
        JSONObject json = null;
        try {
            json = (JSONObject) parser.parse(Objects.requireNonNull(response).body());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        System.out.println(Objects.requireNonNull(json).getAsString("accessToken"));
        return json.getAsString("accessToken");
    }

    @GetMapping("/payment")
    public String payment() {
        String accessToken = getAccessToken();
        return request(accessToken);
    }

    public String request(String accessToken) {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api-mock-akm-ptpoc.payments.jpmorgan.com/tsapi/v1/payments?firmRootId=596c0f34-7d7a-4f9b-b6f8-91704a63828a"))
                .header("client_id", "0030000131")
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
