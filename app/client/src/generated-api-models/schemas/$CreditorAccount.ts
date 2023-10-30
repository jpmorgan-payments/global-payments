/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CreditorAccount = {
    type: 'all-of',
    contains: [{
        type: 'AccountIdWrapper',
    }, {
        properties: {
            accountType: {
                type: 'Enum',
            },
            schemeName: {
                description: `Mandatory for pay by proxy -
                RTP :- Singapore, Australia, Hong Kong, Malaysia, Brazil, Mexico
                Alternate Payments :- Push To Wallet`,
                properties: {
                    proprietary: {
                        type: 'Enum',
                    },
                },
            },
            cardExpiryDate: {
                type: 'string',
                description: `Mandatory for Push to Card. Acceptable format - YYMM`,
            },
        },
    }],
} as const;
