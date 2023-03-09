var jwt = require('jsonwebtoken');

function generate_digital_signature(digital_key, body) {
    return jwt.encode(body, digital_key, algorithm="RS256");
}