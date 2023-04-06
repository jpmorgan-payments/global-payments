# Initiate a Real Time payment using Global Payments API

This example code shows you how to send requests to the Global Payments API for RTP.

## How to run locally

You can manually clone and configure the example yourself:

```
git clone https://github.com/jpmorganchase/global-payments.git
```

This example includes several different server implementations and several different client implementations. The servers all implement the same routes and the clients all work with the same server routes.

Within our new Developer experience we have two types of authentication method - OAuth and SSL. If you wish to call our sandbox servers then you can use OAuth. However when you are ready to move to UAT/Prod servers you will need our SSL implementations.

Pick a server:

- [node SSL](./server/ssl/node)
- [node TypeScript SSL](./server/ssl/node-typescript/)

Our clients implement the required fields for making a US RTP payment. To make any other types you will need to change the fields you provide by following the API spec.

Pick a client:

- [Basic HTML](./client/html/)