/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PostalAddress = {
    description: `Address of the party

    For UK FPS it is recommended that the combined length of all structured
    fields should be less than 140 characters

    SEPA Instant - Only country and addressLine are applicable

    Push To Card - Include buildingNumber and streetName`,
    properties: {
        addressType: {
            type: 'Enum',
        },
        streetName: {
            type: 'string',
            description: `Name of street. Mandatory for US RTP
            Maximum length applicable :-
            Push To Card - 35`,
            maxLength: 70,
        },
        buildingNumber: {
            type: 'string',
            description: `Building name or number.
            Maximum length applicable :-
            Push To Card - 35`,
            maxLength: 16,
        },
        postalCode: {
            type: 'string',
            description: `Zip code. Mandatory for Wallet Payments and US RTP
            Maximum length applicable :-
            Push To Card - 9`,
            maxLength: 16,
        },
        townName: {
            type: 'string',
            description: `Name of the town. Mandatory for US RTP
            Maximum length applicable :-
            Push To Card - 25`,
            maxLength: 35,
        },
        countrySubDvsn: {
            type: 'string',
            description: `Mandatory for US RTP`,
            maxLength: 35,
        },
        country: {
            type: 'string',
            description: `2 character ISO country code.
            Mandatory for Wallet Payments, US RTP, and Interac`,
            maxLength: 2,
            minLength: 2,
        },
        addressLine: {
            type: 'array',
            contains: {
                type: 'string',
                maxLength: 1024,
            },
        },
    },
} as const;
