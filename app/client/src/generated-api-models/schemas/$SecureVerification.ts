/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $SecureVerification = {
    properties: {
        key: {
            type: 'string',
            description: `Key identifies the security question`,
            maxLength: 256,
        },
        secret: {
            type: 'string',
            description: `Authenticate the key using secret answer to the question`,
            maxLength: 256,
        },
    },
} as const;
