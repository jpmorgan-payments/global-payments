/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Debtor = {
    properties: {
        debtorAccount: {
            type: 'DebtorAccount',
            isRequired: true,
        },
        debtorName: {
            type: 'string',
            description: `Mandatory and Supported for :-

            ACH Chile
            Push To Card
            US RTP
            US FedNow
            SARIE IPS
            INTERAC
            Push To Wallet
            Maximum length supported per instrument/market :-

            US RTP: 140
            Push To Card US &amp; Canada: 30
            ACH Chile - 140
            Malaysia RTP (Direct Debit) - 140`,
            maxLength: 128,
        },
        debtorDevice: {
            type: 'DebtorDevice',
        },
        ultimateDebtor: {
            type: 'UltimateDebtor',
        },
    },
} as const;
