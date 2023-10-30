/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TaxInformation = {
    description: `mandatory for Brazil PIX and Chile Low value ACH payments
    Optional for Mexico RTP`,
    properties: {
        taxAmount: {
            type: 'number',
            description: `Applicable only for Mexico RTP`,
        },
        creditorTaxInformation: {
            properties: {
                taxId: {
                    type: 'string',
                    description: `Maximum lengths allowed per instrument/market :-
                    ACH Chile - 35`,
                    isRequired: true,
                    maxLength: 512,
                },
                taxpayerCategory: {
                    type: 'Enum',
                    isRequired: true,
                },
            },
        },
        debtorTaxInformation: {
            properties: {
                taxId: {
                    type: 'string',
                    isRequired: true,
                },
            },
        },
    },
} as const;
