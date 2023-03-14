const jwt = require('jsonwebtoken');
require('dotenv').config();
const { expect } = require('chai');
const generate_digital_signature = require('./digital_signature');

const digitalKey = process.env.DIGITAL_KEY;
const publicKey = process.env.PUBLIC_KEY;

const body = { name: 'John Doe', email: 'john@example.com' };


describe('generate_digital_signature', () => {
  it('should generate a valid digital signature', () => {
    const expectedSignature = jwt.sign(body, digitalKey, { algorithm: 'RS256' });
    const actualSignature = generate_digital_signature(digitalKey, body);
    expect(actualSignature).to.equal(expectedSignature);
  });

  it('should throw an error if digital key is invalid', () => {
    const invalidKey = 'invalid-digital-key';
    expect(() => generate_digital_signature(invalidKey, body)).to.throw();
  });

  it('should be able to verify the key', () => {
    const actualSignature = generate_digital_signature(digitalKey, body);

    jwt.verify(actualSignature, publicKey, function(err, decoded) {
        expect(decoded.email).to.equal(body.email);
        expect(decoded.name).to.equal(body.name);
      });
  });

});