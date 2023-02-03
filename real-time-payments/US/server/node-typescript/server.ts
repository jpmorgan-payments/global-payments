import { NextFunction, Request, Response } from "express";
import { ClientRequest } from "http";
import express from "express";
import bodyParser from "body-parser";
import https from "https"
import jose, { JWTPayload } from "jose"
import {createProxyMiddleware, responseInterceptor}  from 'http-proxy-middleware';

require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const httpsOptions = {
    key:process.env.KEY,
    cert: process.env.CERT
}

// Proxy function to forward any requests straight through to API server
async function createProxyConfiguration(target: string) {
  const options = {
    target,
    changeOrigin: true,
    selfHandleResponse: true,
    agent: new https.Agent(httpsOptions),
    pathRewrite:{
        '^/api/': '',
      },
    onError: (err: Error) => {
      console.log(err);
    },
  };
  return createProxyMiddleware(options);
}

// Proxy function to forward any requests straight through to API server with added digital signature in the body
async function createProxyConfigurationForDigital(target:string, digitalSignature:string) {
  const options = {
    target,
    changeOrigin: true,
    selfHandleResponse: true,
    agent: new https.Agent(httpsOptions),
    pathRewrite: {
      '^/api/digitalSignature': '',
    },
    onProxyReq: async (proxyReq:ClientRequest, req:Request) => {
      if (req.body) {
        proxyReq.setHeader('Content-Type', 'text/xml');
        proxyReq.setHeader('Content-Length', Buffer.byteLength(digitalSignature));
        proxyReq.write(digitalSignature);
      }
    },
    onError: (err:Error) => {
      console.log(err);
    },
  };
  return createProxyMiddleware(options);
}

//Method for creating signed body
const generateJWTJose = async (body: JWTPayload) => {
    const privateKey = await jose.importPKCS8(process.env.DIGITAL, 'RSA-SHA256');
    const signature = await new jose.SignJWT(body)
      .setProtectedHeader({
        alg: 'RS256',
      })
      .sign(privateKey);
    return signature;
  };

app.use('/api/digitalSignature/*', async (req:Request, res:Response, next:NextFunction) => {
  const digitalSignature = await generateJWTJose(req.body);
  const func = await createProxyConfigurationForDigital('https://apigatewaycat.jpmorgan.com', digitalSignature);
  func(req, res, next);
});

app.use('/*', async (req:Request, res:Response, next:NextFunction) => {
  const func = await createProxyConfiguration('https://apigatewaycat.jpmorgan.com');
  func(req, res, next);
});

app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);