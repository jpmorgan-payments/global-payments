package com.jpmorgan.payments.digital_signature;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtBuilder;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;

import java.security.Key;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import javax.xml.bind.DatatypeConverter;
import org.json.JSONObject;

public class JWTDemo

{
    // Your digital signature key, this should not be stored like this in your
    // system.
    private static String SECRET_KEY = "";

    // The JSON payload to be digitally signed.
    private static String PAYLOAD = "";

    public static void main(String[] args) throws InvalidKeySpecException, NoSuchAlgorithmException {
        System.out.println(createJWT());
    }

    private static PrivateKey gatherPrivateKey() {
        byte[] prvKeyBytes = DatatypeConverter.parseBase64Binary(SECRET_KEY);
        PKCS8EncodedKeySpec keySpec = new PKCS8EncodedKeySpec(prvKeyBytes);
        PrivateKey prvKey = null;
        try {
            KeyFactory kf = KeyFactory.getInstance("RSA");
            prvKey = kf.generatePrivate(keySpec);
        } catch (InvalidKeySpecException e) {
            // TODO Proper error handling is required here
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            // TODO Proper error handling is required here
            e.printStackTrace();
        }
        return prvKey;
    }

    public static String createJWT() throws InvalidKeySpecException, NoSuchAlgorithmException {

        // The JWT signature algorithm we will be using to sign the token
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.RS256;

        // Prepare your private key for signing
        PrivateKey prvKey = gatherPrivateKey();

        return Jwts.builder().claim("payments", PAYLOAD)
                .signWith(prvKey, signatureAlgorithm).compact();

    }
}
