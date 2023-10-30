/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Payments = {
    properties: {
        possibleDuplicateMessage: {
            type: 'boolean',
            description: `Optional field to indicate a duplicate payment`,
        },
        requestedExecutionDate: {
            type: 'string',
            description: `Requested date on which/by which the transaction should be executed ISO Date format. (YYYY-MM-DD)`,
            isRequired: true,
            maxLength: 10,
            pattern: '[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])',
        },
        paymentIdentifiers: {
            type: 'PaymentIdentifiers',
            isRequired: true,
        },
        paymentCurrency: {
            type: 'string',
            description: `3- character ISO currency code. E.g. SGD, GBP, AUD, EUR, MXN, CLP`,
            isRequired: true,
            maxLength: 3,
            minLength: 3,
        },
        paymentAmount: {
            type: 'number',
            description: `Amount should be more than 0.01 with maximum of two decimal places allowed

            NOTE: For Chile ACH, decimals are not accepted

            Maximum amount allowed per market/instrument :-

            UK FPS - GBP 1,000,000

            SEPA Instant  - EUR 100,000`,
            isRequired: true,
        },
        paymentType: {
            type: 'PaymentType',
        },
        debtor: {
            type: 'Debtor',
            isRequired: true,
        },
        debtorAgent: {
            type: 'DebtorAgent',
            isRequired: true,
        },
        creditorAgent: {
            type: 'CreditorAgent',
        },
        creditor: {
            type: 'Creditor',
            isRequired: true,
        },
        transferType: {
            type: 'Enum',
            isRequired: true,
        },
        purpose: {
            type: 'Purpose',
        },
        categoryPurpose: {
            type: 'CategoryPurpose',
        },
        remittanceInformation: {
            type: 'RemittanceInformation',
        },
        taxInformation: {
            type: 'TaxInformation',
        },
        secureVerification: {
            type: 'array',
            contains: {
                type: 'SecureVerification',
            },
        },
        paymentExpiryDate: {
            type: 'string',
            description: `Applies only for Interac proxy Payments. Format expected - YYYY-MM-DDThh:mm:ss+/-time offset to UTC`,
            format: 'date-time',
        },
        chargeBearer: {
            type: 'Enum',
        },
    },
} as const;
