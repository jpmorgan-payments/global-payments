/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $PaymentIdentifiers = {
    description: `Payment Id`,
    properties: {
        endToEndId: {
            type: 'string',
            description: `Customer assigned reference to the transaction.
            Maximum length supported for each instrument and market :-

             **Credit Transfer Payments**
            |Payment Type| Market       | Max Length |Format
            |------------|--------------|------------|-------------
            | RTP        | UK           | 31         |letters and numbers only
            | RTP        | Singapore    | 35         |letters and numbers only
            | RTP        | Australia    | 35         |letters and numbers only
            | RTP        | Hong Kong    | 35         |letters and numbers only
            | RTP        | Indonesia    | 35         |letters and numbers only
            | RTP        | Brazil       | 34         |letters and numbers only
            | RTP        | Mexico       | 16         |letters and numbers only
            | RTP        | US           | 31         |letters and numbers only
            | RTP        | SEPA          | 35         |letters and numbers only
            | Push To Card| US/Canada    | 16         |letters and numbers only
            | ACH        | Chile        | 35         |
            | BLOCKCHAIN  | JPM COIN markets  | 16         |letters and numbers only

             **Direct Debit Payments**
            |Payment Type| Market       | Max Length |Format                   |
            |------------|--------------|------------|-------------------------|
            | RTP        | Malaysia     | 35         |Letters and numbers only |`,
            isRequired: true,
            maxLength: 128,
        },
        otherPaymentReferences: {
            description: `The object becomes MANDATORY for below instrument and market when
            transferType = 'DEBIT'

            |Payment Type| Market       | Max Length |Format                   |
            |------------|--------------|------------|-------------------------|
            | RTP        | Malaysia     | 35         |Letters and numbers only |`,
            properties: {
                paymentReferenceValue: {
                    type: 'string',
                    description: `Clearing house originating mandate identifier to be provided for Direct debit payments.`,
                    isRequired: true,
                    maxLength: 128,
                },
            },
        },
    },
} as const;
