/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AdditionalInstitution = {
    description: `Only applicable to UK Faster Payments and Mexico RTP (foreign remittances)`,
    properties: {
        bic: {
            type: 'string',
        },
        name: {
            type: 'string',
        },
        isForeignParty: {
            type: 'boolean',
        },
        postalAddress: {
            type: 'PostalAddress',
        },
    },
} as const;
