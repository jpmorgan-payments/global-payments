# Real time payments US Node Typescript Server

An [Express server](http://expressjs.com) implementation

## Requirements

- Node v16+
- [Configured .env file](../README.md)

## How to run

1. Confirm `.env` configuration

Ensure the certificate keys are configured in `.env` in this directory. It should include the following keys:

```yaml
DIGITAL=...
KEY=_test...
CERT=...
```

2. Install dependencies and start the server

```
yarn install
yarn start
```
