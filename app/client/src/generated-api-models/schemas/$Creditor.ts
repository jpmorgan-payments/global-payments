/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Creditor = {
    properties: {
        creditorAccount: {
            type: 'CreditorAccount',
            isRequired: true,
        },
        creditorName: {
            type: 'string',
            description: `**Credit Transfer Payments**

            Mandatory for RTP Markets :-

            | Market |
            | ------ |
            |  UK    |
            |  SEPA  |
            |  US    |


            Mandatory for RTP markets for Pay to Account transactions :-

            |  Market    |
            | -----------|
            |  Singapore |
            |  Australia |
            |  Mexico    |
            |  Hong Kong |
            |  Brazil    |


            Mandatory For Alternate Payments :-

            | Alternate Payments | Market        |
            | -------------------| --------------|
            | Push To Card       | US and Canada |


            Mandatory for ACH Payments :-

            |  Market    |
            | -----------|
            |  Chile |


            Maximum length supported per instrument/market :-

            | Payment Type | Market | Max Length |
            | --- | --- | --- |
            | RTP | UK | 40 |
            | RTP | Singapore | 140 |
            | RTP | Australia | 140 |
            | RTP | Hong Kong | 140 |
            | RTP | Indonesia | 140 |
            | RTP | Mexico | 40 |
            | Push To Card | US/Canada | 30 |
            | ACH | Chile | 70 |
            | SEPA Instant| SEPA Zone | 140 |

             **Direct Debit Payments**

            Maximum length supported per instrument/market :-

            | Payment Type | Market | Max Length |
            | --- | --- | --- |
            | RTP | Malaysia | 140 |`,
            isRequired: true,
        },
        creditorDevice: {
            type: 'DeviceInfo',
        },
        postalAddress: {
            type: 'PostalAddress',
        },
        dateAndPlaceOfBirth: {
            type: 'DateAndPlaceOfBirth',
        },
        countryOfResidence: {
            type: 'CountryOfResidence',
        },
        ultimateCreditor: {
            type: 'UltimateCreditor',
        },
        additionalCreditors: {
            type: 'array',
            contains: {
                type: 'AdditionalCreditor',
            },
        },
        partyIdentifiers: {
            type: 'all-of',
            contains: [{
                type: 'PartyIdentifier',
            }],
        },
    },
} as const;
