# Global Payments showcase app - TEST

The Global Payments API allows you to accept payments across a variety of regions and countries.

You can:

- Spin-up a sample application with UI that demonstrates the main use case for each endpoint. For example, creating a payment.
- Explore the API resources using a Postman Collection.

## What's included in this repo?

There are two main directories for you to access:

- `/app` for the showcase UI.
- `/postman` for the Postman Collection.

### Application (App)

A TS/JS application with a client used to demonstrate how to integrate with our APIs on frontend applications.

All your actions on this application are served by mock data included in the app codebase.

### Postman Collection

Get straight to the API endpoints in action, make calls and see responses.
To use the Postman collection, import the collection file to Postman and follow the included setup instructions to access all possible calls to the Global Payments API.

## Included in the App project folders

### [Client](./app/client/)

This is the core UI application written in TS/JS with the React framework. This application illustrates the various capabilities of the Global Payments API, using mocked responses stored within the codebase.

Check out the [features](./app/client/src/features/) directory to explore the the components and hooks that use these features.

## Run the Showcase Application locally

Install and run a TS/JS application with a client used to demonstrate how to integrate with our APIs on frontend applications.

### Install and serve the app

This example requires Yarn.

To start our client code with mocked responses:

1. Clone this repo.

2. Install the `client` folder:

```
cd app
cd client
yarn install
```

3. Start the UI:

```
yarn start
```

4. Open a browser and navigate to the locally deployed app using the URL provided in the command line. Usually `localhost:3000`.

You have deployed the showcase Global Payments app. Follow the onscreen instructions to explore the banking functionality available.

## Mocked Data

You will see in this showcase that we are currently mocking the server responses using [MSW](https://mswjs.io).
You will still be able to see the request in the network tab of your browser developer tools.

You can ignore the code stored in the data, mocks and mockServiceWorker folders as this only relates to our mocking services.

## Accessing JP Morgan Sandbox environment

If you would like to try out our APIs you can use our postman collection provided in this repository or follow the quick start guide [here](https://developer.payments.jpmorgan.com/quick-start).
