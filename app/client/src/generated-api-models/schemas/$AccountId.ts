/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountId = {
    type: 'string',
    description: `**Direct Debit Payments**

    | Payment Type | Market   | Max Length |
    | -------------| -------- | ---------- |
    |     RTP      | Malaysia |    34      |

     **Credit Transfer Payments**

    Applicable and mandatory for RTP and Blockchain (Coin) Payments only

    This field is to provide the regular account id when it is a pay by
    Account instruction. if pay by proxy this does not need to be filled.


    Maximum length supported for each instrument and market :-

    | Payment Type | Market | Max Length |
    | --- | --- | --- |
    | RTP | UK | 8 (7 digit A/C numbers should be padded with a leading zero) |
    | RTP | Singapore | 35 |
    | RTP | Australia | 35 |
    | RTP | Hong Kong | 35 |
    | RTP | Indonesia | 35 |
    | RTP | Brazil | 34 |
    | RTP | Mexico | 16 |
    | RTP | US | 31 |
    | Push To Card | US/Canada | 16 |
    | INTERAC | Canada | 35 |
    | ACH | Chile | 17 |
    | SEPA |  | 34 (IBAN) |
    | COIN |  | 34 |`,
    maxLength: 128,
} as const;
