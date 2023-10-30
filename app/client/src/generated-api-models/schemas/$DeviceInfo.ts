/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DeviceInfo = {
    description: `Contains Creditor device info.

     **Applicable for Direct Debit Payments Only(transferType=DEBIT)**

     **Refer the table below for the applicable and mandatory markets**

    | Markets        | Significance |
    |----------------|--------------|
    |   Malaysia     | MANDATORY    |`,
    properties: {
        ipAddress: {
            type: 'string',
            description: `Device IP address

             **Applicable for Direct Debit Payments Only(transferType=DEBIT)**

             **Refer the table below for the applicable and mandatory markets**

            | Markets        | Significance |
            |----------------|--------------|
            |   Malaysia     | MANDATORY    | `,
            maxLength: 39,
        },
        geoCoordinates: {
            description: `Contains the geographical coordinates.

             **Applicable for Direct Debit Payments Only(transferType=DEBIT)**

             **Refer the table below for the applicable and mandatory markets**

            | Markets        | Significance |
            |----------------|--------------|
            |   Malaysia     | MANDATORY    | `,
            properties: {
                latitude: {
                    type: 'string',
                    maxLength: 12,
                },
                longitude: {
                    type: 'string',
                    maxLength: 12,
                },
            },
        },
    },
} as const;
