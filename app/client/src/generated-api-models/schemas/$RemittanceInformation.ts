/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RemittanceInformation = {
    description: `Mandatory for Malaysia Faster Payments, optional for other markets`,
    properties: {
        unstructuredInformation: {
            type: 'array',
            contains: {
                type: 'string',
                maxLength: 512,
            },
        },
        structuredInformation: {
            type: 'array',
            contains: {
                type: 'StructuredInformation',
            },
        },
        foreignCurrency: {
            type: 'string',
            description: `Only applicable for Mexico Faster Payments`,
            maxLength: 3,
            minLength: 3,
        },
        fx: {
            type: 'FxApplied',
        },
    },
} as const;
