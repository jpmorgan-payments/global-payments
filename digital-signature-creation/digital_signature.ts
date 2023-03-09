import * as jwt from 'jsonwebtoken';

export function generateDigitalSignature(digitalKey: string, body: any): string {
    return jwt.sign(body, digitalKey, { algorithm: 'RS256' });
}