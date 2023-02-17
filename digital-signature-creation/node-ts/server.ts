import express, { Express, Request, Response } from 'express';
import { JWTPayload, importPKCS8, SignJWT} from 'jose'
import dotenv from 'dotenv';
import bodyParser from "body-parser";

dotenv.config();

require('dotenv').config();

const app: Express = express();
app.use(bodyParser.json());

//Method for creating signed body
const generateJWTJose = async (body: JWTPayload) => {
  const envKey = process.env.DIGITAL ? process.env.DIGITAL : '';
  const privateKey = await importPKCS8(envKey, 'RSA-SHA256');
  const signature = await new SignJWT(body)
    .setProtectedHeader({
      alg: 'RS256',
    })
    .sign(privateKey);
  return signature;
};

app.get('/', async (req: Request, res: Response) => {
  const digitalSignature = await generateJWTJose(req.body);
  res.send(digitalSignature)
});

app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);