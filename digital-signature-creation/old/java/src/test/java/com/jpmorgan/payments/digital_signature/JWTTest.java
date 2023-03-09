package com.jpmorgan.payments.digital_signature;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class JWTTest

{

    // Test secret key generated using JJWT.
    private static String SECRET_KEY = "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC2ndKT6CUptdcJQK1rrWyrtRMZ77u2mGq+VUg+zIEAYB6sGs9/4GJmemzvNZ9ynJDiIE0oursYxIUlC0aMkcd46N4q2xXltn6YX2LlAU4+K3LUmiu5KM4Idi1ZtqV22o0MRdjjWKCA0/O35njyiTvjCQqLoLKcvXSg1OimsHzdknSiw/VIalj640O1KqnJEmK7jN4/26BtIY8ziNzanHqpGZOu+RgJPUoTwopUxCW0nHOoWAivIzOIoxqxkkiYqIbH8dyQPeJWfzhx8kn67MliKmLhTJwM0PjtFEE4ht04h8BiC7iieSyi+1+bZCn8p0gQXrPpqcHhYZ+TR+im0ZxVAgMBAAECggEBALCs/icEyLeS6slT3rQ3Y9S36hQEwRpGWbdtMOk413GyjNo7UhdI0kqNFUlVGr86xF1RnPTTu+GZd6tAPnAPNeo/eXoC3iuRJOdsGXSvj7BMPtt7kOOhm7vKAdQzBeB4T0/ZX52MiDQ7WybHfqo/pUXg4Gf3//XuwaA8fB2Q0C1YN2LtdU8J05TnQn+yn7PmBtbyz5vISDj2VWhCC2i4OUtdY1O+3XxiA0merjvrC3Drsh+ky4AizXvR2Jn8IsStIsrJGmEB2NGjFw1wnFj6BrzLu8ZHPkJAzs/smRcrLyfxOvEpfO1vf2LFgCBEBOKbktk67r5FDhDANDrua2LZ96ECgYEA9Zxc0mpNVlWHuaaXYrh3JpiAIHIL50t7PnL9KtBf67J4eh20l+hef5a284Bvl4rFHxWYSopc60Bh46YaYwJ9n6NCNxPxKaI5jMpnGJ+NkDMcf4t+w7MiL1KUry4sApyZaJ/Lv9LpSPqj6Eub9k0ZybUsr594d137EO6P8D3xSz0CgYEAvldQ0+6Jl+UBhVIyCjy95fGVUio088ebOAMCgV9adNN3uXUXxpk7NBRgVWgjq+JGdp/b9NtJPtPultP1EtT87fuzlh5Ewps3L2KRW+XoCl2BE5652FQAbiZ9e6Yy21biMLbXlL+zbrSJFXFVWHHq+QqmxTLNzP/JtxMkg6KMBvkCgYEAq+2MvG5VPL4aiEapah2eqpHN/uhWlM4ts4Vi2vmKa78+vpzUshGjNMUXxFR/ySEG47+GH4fDi5pB6812YyB3N6xcyZlYE8DPcFKu4Hmv6uUcadwIHI3kvCOemRJFFH7ylF5njhvh2Yg5/H4Q6tUF3EDKyxViioxrF2snrxBtPDECgYA965nX2Bna2B0OihbNTcVZMKYq/KANTjoolpISFDsRFlo0cusxKFgiMR7FqgMwv4O8w3SCy3OghMFxP7LSVYeSw/dANsiXpnbla2NuSfSaqqB7CX/b6DfbnZnkx8RzpmgfANxQ/6wXr5OI7j2dcDHIorZuIIDi17N/YzLVv+NdwQKBgFEL3jPe6eL9FLvHjCH1b/WJNGwIOqlpMgT2X0ULtqihqwh7+67LpDkKbkBSRzzhaUZFxRYtXMPGDN+LBU9Mpxj7cpR2u301rGPc1P/5CmkwPr74fkmeUObaSSz7p2mjMzfc2mKX4srltaMoD+mGGRPLJEGm4z37FjhOhnH9aYaS\n-----END PRIVATE KEY-----";

    // The JSON payload to be digitally signed.
    private static String PAYLOAD = "{\r\n  \"payments\": {\r\n    \"requestedExecutionDate\": \"2023-02-17\",\r\n    \"paymentAmount\": 25,\r\n    \"paymentType\": \"RTP\",\r\n    \"paymentIdentifiers\": {\r\n      \"endToEndId\": \"uf16764598096219\"\r\n    },\r\n    \"paymentCurrency\": \"EUR\",\r\n    \"transferType\": \"CREDIT\",\r\n    \"debtor\": {\r\n      \"debtorName\": \"OBGLRTPCL1 Account\",\r\n      \"debtorAccount\": {\r\n        \"accountId\": \"DE88501108006231400596\",\r\n        \"accountCurrency\": \"EUR\",\r\n        \"accountType\": \"IBAN\"\r\n      }\r\n    },\r\n    \"debtorAgent\": {\r\n      \"financialInstitutionId\": {\r\n        \"bic\": \"CHASDEFX\"\r\n      }\r\n    },\r\n    \"creditor\": {\r\n      \"creditorName\": \"UNICORNUAT Account\",\r\n      \"creditorAccount\": {\r\n        \"accountId\": \"DE45501108000041287103\",\r\n        \"accountCurrency\": \"EUR\"\r\n      }\r\n    },\r\n    \"creditorAgent\": {\r\n      \"financialInstitutionId\": {\r\n        \"bic\": \"CHASDEFX\"\r\n      }\r\n    }\r\n  }\r\n}";

    private String expectedResponse = "eyJhbGciOiJSUzI1NiJ9.eyJwYXltZW50cyI6eyJyZXF1ZXN0ZWRFeGVjdXRpb25EYXRlIjoiMjAyMy0wMi0xNyIsInBheW1lbnRJZGVudGlmaWVycyI6eyJlbmRUb0VuZElkIjoidWYxNjc2NDU5ODA5NjIxOSJ9LCJkZWJ0b3IiOnsiZGVidG9yQWNjb3VudCI6eyJhY2NvdW50SWQiOiJERTg4NTAxMTA4MDA2MjMxNDAwNTk2IiwiYWNjb3VudFR5cGUiOiJJQkFOIiwiYWNjb3VudEN1cnJlbmN5IjoiRVVSIn0sImRlYnRvck5hbWUiOiJPQkdMUlRQQ0wxIEFjY291bnQifSwiZGVidG9yQWdlbnQiOnsiZmluYW5jaWFsSW5zdGl0dXRpb25JZCI6eyJiaWMiOiJDSEFTREVGWCJ9fSwiY3JlZGl0b3JBZ2VudCI6eyJmaW5hbmNpYWxJbnN0aXR1dGlvbklkIjp7ImJpYyI6IkNIQVNERUZYIn19LCJ0cmFuc2ZlclR5cGUiOiJDUkVESVQiLCJjcmVkaXRvciI6eyJjcmVkaXRvck5hbWUiOiJVTklDT1JOVUFUIEFjY291bnQiLCJjcmVkaXRvckFjY291bnQiOnsiYWNjb3VudElkIjoiREU0NTUwMTEwODAwMDA0MTI4NzEwMyIsImFjY291bnRDdXJyZW5jeSI6IkVVUiJ9fSwicGF5bWVudEN1cnJlbmN5IjoiRVVSIiwicGF5bWVudEFtb3VudCI6MjUsInBheW1lbnRUeXBlIjoiUlRQIn19.P8H76U4H7ai9khQtNgmiSRJ_kgf3JsAkTfm58gUtv2WQ0PKHLYB6bq561td4F9spQTrhkZrKFFlv1tHTBw5Lx18T2AZ4hgNWdl2Y2YxCfVJ8GjeV7AOvmb9_pisks8UUh51r7mvPQfcGyz8oNlhQe4NJrqKZBNzVag4Yl9LdiTL6vQdkr_WFmZJGElgesv52jUHZ9PpTh8TkjhdEY2z2WIJk9CuGtWucA5BTJBYXHEJG9n9zfw-AnykdmFgYUP8cKzNybadfWxXZ7nks0qDLXNR-RmojwX_myCAMAvN6nZR26Q2BvJwCtW-VL9z8QsXsNl8NC8DwiqEbgUjv78B6wA";

    @Test
    void assertSignatureCreated() {
        String result = JWTDemo.createJWT(PAYLOAD, SECRET_KEY);
        assertEquals(expectedResponse, result);
    }
}
