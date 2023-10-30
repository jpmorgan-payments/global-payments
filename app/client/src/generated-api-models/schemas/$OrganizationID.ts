/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $OrganizationID = {
    description: `Can be used when the underlying payer is a Legal Entity. It should be used together with Ultimate Debtor Name and address, and it should contain the payment account number of the underlying payer. In case the transfer has not been initiated from a payment account, the value populated should be a unique transaction identifier of the underlying payer which permits the traceability of the transaction back to them.

    Applicable markets and rules

    Can be used for ultimateDebtor and ultimateCreditor for the following

    RTP markets :-

    SEPA

    Mexico

    UK

    US

     ***Australia Faster Payments - Only to be used for ultimateCreditor.
    For Australia Faster Payments, only id and schemeName.proprietary fields
    are applicable


    ACH markets :-
    Chile

    `,
    properties: {
        id: {
            type: 'string',
            description: `For AU Superannuation payment (category payment), populate with USI number for the Superannuation fund

            Max length for ACH :-
            Chile - 255`,
            isRequired: true,
            maxLength: 512,
        },
        bic: {
            type: 'string',
            maxLength: 128,
        },
        issuer: {
            type: 'string',
            description: `Max length for ACH :-
            Chile - 35`,
            maxLength: 128,
        },
        schemeName: {
            description: `type of scheme
            Mandatory for SEPA Instant. Check proprietary field rules for more information.`,
            properties: {
                code: {
                    type: 'Code',
                },
                proprietary: {
                    type: 'Proprietary',
                },
            },
        },
    },
} as const;
