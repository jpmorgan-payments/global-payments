/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $StructuredInformation = {
    properties: {
        creditReference: {
            type: 'string',
            description: `Unique reference to unambiguously refer to the payment transaction.`,
            maxLength: 140,
        },
        additionalRemittanceInformation: {
            type: 'string',
            description: `Applicable Faster Payment Markets -

            Malaysia
            Max length supported - 250 characters

            US - mandatory if structuredInformation object is used      `,
            maxLength: 512,
        },
    },
} as const;
