# Running the server

We included several RESTful servers that each implement the same endpoints and
logic. Pick the language you are most comfortable in and follow the instructions
in the directory on how to run.

# Supported languages

- [JavaScript (Node)](node/README.md)

# Setting up your .env file

Rename and move the [`.env.example`](.env.example) file into a file named`.env` in the specific folder of the server language you want to use. For example:

```
cp .env.example real-time-payments/US/server/node/.env
```

You will need to have an account configured on the JP Morgan [developer portal](https://developer.jpmorgan.com).
Once you have onboarded you will need to create an SSL certificate set and upload it to your project. Once you have done this, add the certificates to your .env file.
