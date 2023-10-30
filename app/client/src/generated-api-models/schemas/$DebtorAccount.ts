/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DebtorAccount = {
    type: 'all-of',
    contains: [{
        type: 'AccountIdWrapper',
    }, {
        description: `account details of the debtor party`,
        properties: {
            accountType: {
                type: 'AccountType',
            },
            accountCurrency: {
                type: 'AccountCurrency',
            },
        },
    }],
} as const;
