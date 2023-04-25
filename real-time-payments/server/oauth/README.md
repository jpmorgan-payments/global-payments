# Global Payments OAuth servers
This example is a simple app that uses Spring boot and Oauth2 to login using google or github for single-provider single-sign on.
Using the created mock sandbox this application gets the payment status firm root id.
 
# Configure application.yml
Make sure that application.yml inside resources directory has clientId and clientSecret. If not please follow 'Add a New Github app'

# Start Up Application
After configuring application.yml, run the app by running OauthApplication.java. Visit the homepage at http://localhost:8080,
here you can login with github or google account as normal.

# Add a New GitHub App
https://github.com/settings/developers

Start by following the link above, then complete the steps below:
1. Select "New OAuth App"
2. Enter an app name and description
3. Enter your app’s home page, which should be http://localhost:8080, in this case
4. Then Authorization callback URL as http://localhost:8080/login/oauth2/code/github 
5. Click Register Application