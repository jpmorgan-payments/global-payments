/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $UltimateCreditor = {
    type: 'all-of',
    contains: [{
        type: 'PartyIdentifier',
    }, {
        description: `ultimate creditor party details`,
        properties: {
            ultimateCreditorName: {
                type: 'string',
                description: `Mandatory for US RTP &amp; US FedNow`,
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
        },
    }],
} as const;
