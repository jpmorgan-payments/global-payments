/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountIdWrapper = {
    type: 'one-of',
    contains: [{
        properties: {
            accountId: {
                type: 'AccountId',
                isRequired: true,
            },
        },
    }, {
        properties: {
            alternateAccountIdentifier: {
                type: 'AlternateAccountIdentifier',
                isRequired: true,
            },
            additionalAlternateIdentifiers: {
                type: 'AdditionalAlternateAccountIdentifiers',
            },
        },
    }],
} as const;
