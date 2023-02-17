# Digital Signature Node Server

An [Express server](http://expressjs.com) implementation for showing how to generate a compatible digital signature for submitting to our payment APIs.

## Requirements

- Node v16+
- [Configured .env file](../README.md)

## How to run

1. Confirm `.env` configuration

Ensure the certificate keys are configured in `.env` in this directory. It should include the following keys:

```yaml
DIGITAL=...
```

2. Install dependencies and start the server

```
yarn install
yarn start
```

3. Send a request with the json body you want encoded to http://localhost:4242
