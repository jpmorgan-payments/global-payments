const bodyParser = require('body-parser');
const express = require('express');
const jose = require('jose');
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

const generateJWTJose = async (body) => {
    const privateKey = await jose.importPKCS8(process.env.DIGITAL, 'RSA-SHA256');
    const signature = await new jose.SignJWT(body)
      .setProtectedHeader({
        alg: 'RS256',
      })
      .sign(privateKey);
    return signature;
  };

app.use('/*', async (req, res) => {
  const digitalSignature = await generateJWTJose(req.body);
  res.send(digitalSignature)
});

app.listen(4242, () =>
  console.log(`Node server listening at http://localhost:4242`)
);