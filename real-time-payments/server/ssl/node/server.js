const bodyParser = require('body-parser');
const express = require('express');
const https = require('https');
const jose = require('jose');
const {
  createProxyMiddleware,
  responseInterceptor,
} = require('http-proxy-middleware');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({  extended: true }));

const httpsOptions = {
    key:process.env.KEY,
    cert: process.env.CERT
}

// Method to add logging to your proxy responses for debugging/info purposes
const handleProxyResponse = async (responseBuffer, proxyRes, req) => {
  const exchange = `[${req.method}] [${proxyRes.statusCode}] ${req.path} -> ${proxyRes.req.protocol}//${proxyRes.req.host}${proxyRes.req.path}`;
  console.log(exchange);
  if (proxyRes.headers['content-type'] === 'application/json') {
    const data = JSON.parse(responseBuffer.toString('utf8'));
    return JSON.stringify(data);
  }
  return responseBuffer;
};

// Proxy function to forward any requests straight through to API server
async function createProxyConfiguration(target) {
  const options = {
    target,
    changeOrigin: true,
    selfHandleResponse: true,
    agent: new https.Agent(httpsOptions),
    pathRewrite:{
        '^/api/': '',
      },
    onProxyRes: responseInterceptor(handleProxyResponse),
    onError: (err) => {
      console.log(err);
    },
  };
  return createProxyMiddleware(options);
}

// Proxy function to forward any requests straight through to API server with added digital signature in the body
async function createProxyConfigurationForDigital(target, digitalSignature) {
  const options = {
    target,
    changeOrigin: true,
    selfHandleResponse: true,
    agent: new https.Agent(httpsOptions),
    pathRewrite: {
      '^/api/digitalSignature': '',
    },
    onProxyReq: async (proxyReq, req) => {
      if (req.body) {
        proxyReq.setHeader('Content-Type', 'text/xml');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(digitalSignature));
        proxyReq.write(digitalSignature);
      }
    },
    onProxyRes: responseInterceptor(handleProxyResponse),
    onError: (err) => {
      console.log(err);
    },
  };
  return createProxyMiddleware(options);
}

//Method for creating signed body
const generateJWTJose = async (body) => {
    const privateKey = await jose.importPKCS8(process.env.DIGITAL, 'RSA-SHA256');
    const signature = await new jose.SignJWT(body)
      .setProtectedHeader({
        alg: 'RS256',
      })
      .sign(privateKey);
    return signature;
  };

app.use('/api/digitalSignature/*', async (req, res, next) => {
  // Fix for some frontends sending payment amount as a string
  if(req.body.payments?.paymentAmount){
    req.body.payments.paymentAmount = parseInt(req.body.payments.paymentAmount)
  }
  const digitalSignature = await generateJWTJose(req.body);
  const func = await createProxyConfigurationForDigital('https://apigatewaycat.jpmorgan.com', digitalSignature);
  func(req, res, next);
});

app.use('/*', async (req, res, next) => {
  const func = await createProxyConfiguration('https://apigatewaycat.jpmorgan.com');
  func(req, res, next);
});

app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);