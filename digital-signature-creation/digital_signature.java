import java.util.Base64;
import java.security.KeyFactory;
import java.security.PrivateKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.security.Signature;
import java.security.NoSuchAlgorithmException;
import java.security.InvalidKeyException;
import java.security.SignatureException;

public class JWT {
    public static String generate_digital_signature(String digital_key, String body) throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
        byte[] decodedKey = Base64.getDecoder().decode(digital_key);
        PKCS8EncodedKeySpec spec = new PKCS8EncodedKeySpec(decodedKey);
        KeyFactory kf = KeyFactory.getInstance("RSA");
        PrivateKey privateKey = kf.generatePrivate(spec);
        Signature signature = Signature.getInstance("SHA256withRSA");
        signature.initSign(privateKey);
        signature.update(body.getBytes());
        return Base64.getEncoder().encodeToString(signature.sign());
    }
}