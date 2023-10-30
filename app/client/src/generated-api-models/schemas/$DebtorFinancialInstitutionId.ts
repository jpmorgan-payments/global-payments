/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DebtorFinancialInstitutionId = {
    description: `Financial institution identifier of debtor`,
    properties: {
        bic: {
            type: 'Enum',
        },
        clearingSystemId: {
            description: `**Credit Transfer Payment**
            Not applicable to UK, India, Singapore, Australia, Mexico Faster
            Payments.

            Mandatory for US RTP

             **Direct Debit Payment**
            Mandatory for Malaysia RTP`,
            properties: {
                id: {
                    type: 'AccountIdentification',
                },
                idType: {
                    type: 'IdType',
                },
            },
        },
    },
} as const;
