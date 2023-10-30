/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreditorAgent = {
    description: `- Not applicable for Push To Card, Push To Wallet and Interac
    - Mandatory for pay by account and optional for pay by proxy.
    - Mandatory for Mexico RTP if the creditor is a bank

     ***NOTE: Creditor Agent is MANDATORY for RTP Direct Debit payments for all markets.***`,
    properties: {
        financialInstitutionId: {
            type: 'CreditorFinancialInstitutionId',
            isRequired: true,
        },
        additionalInstitutions: {
            type: 'array',
            contains: {
                type: 'AdditionalInstitution',
            },
        },
    },
} as const;
