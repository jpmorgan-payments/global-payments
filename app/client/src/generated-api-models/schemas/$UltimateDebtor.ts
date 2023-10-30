/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UltimateDebtor = {
    type: 'all-of',
    contains: [{
        type: 'PartyIdentifier',
    }, {
        description: `The ultimate party whose account is being debited or charged for`,
        properties: {
            ultimateDebtorName: {
                type: 'string',
                description: `Mandatory for US RTP
                Maximum length supported :-
                Push To Card  - 25`,
                maxLength: 140,
            },
            dateAndPlaceOfBirth: {
                type: 'DateAndPlaceOfBirth',
            },
            countryOfResidence: {
                type: 'CountryOfResidence',
            },
            postalAddress: {
                type: 'PostalAddress',
            },
            additionalIdentifiers: {
                type: 'array',
                contains: {
                    type: 'AdditionalIdentifier',
                },
            },
        },
    }],
} as const;
