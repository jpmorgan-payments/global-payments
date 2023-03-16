# Digital Signature Java

A Java implementation of generating a digital signature

## Requirements

- Java installed
- [Configured .env file](../README.md)

## How to run

You can run this code by running the tests or by including it in your codebase.

1. Confirm `.env` configuration

Ensure the certificate keys are configured in `.env` in this directory. It should include the following keys:

```yaml
PRIVATE=...
PUBLIC=
PAYLOAD=
```

2. Run the test in [the test folder](./src/test/java/com/jpmorgan/payments/digital_signature/JWTTest.java)
