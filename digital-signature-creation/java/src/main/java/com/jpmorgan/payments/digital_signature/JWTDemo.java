package com.jpmorgan.payments.digital_signature;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.security.KeyFactory;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.PKCS8EncodedKeySpec;
import javax.xml.bind.DatatypeConverter;
import org.json.JSONObject;

public class JWTDemo

{

    /**
     * Method for reading in a private key and preparing it for signing
     * 
     * @param secretKey Your digital signature key that has been configured in
     *                  developer.jpmorgan.com
     * @return a Private Key object
     */
    private static PrivateKey gatherPrivateKey(String secretKey) {

        secretKey = secretKey.replace("-----BEGIN PRIVATE KEY-----", "");
        secretKey = secretKey.replace("-----END PRIVATE KEY-----", "");

        byte[] prvKeyBytes = DatatypeConverter.parseBase64Binary(secretKey);
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

    /**
     * Method for signing a JSON payload
     * 
     * @param payload   The JSON payload to be digitally signed.
     * @param secretKey Your digital signature key that has been configured in
     *                  developer.jpmorgan.com
     * @return
     */
    public static String createJWT(String payload, String secretKey) {

        // The JWT signature algorithm we will be using to sign the token
        SignatureAlgorithm signatureAlgorithm = SignatureAlgorithm.RS256;

        // Prepare your private key for signing
        PrivateKey prvKey = gatherPrivateKey(secretKey);
        final JSONObject obj = new JSONObject(payload);

        return Jwts.builder().setClaims(obj.toMap())
                .signWith(prvKey, signatureAlgorithm).compact();

    }
}
