/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Purpose = {
    description: `This field is mandatory for Singapore Faster Payments. Underlying reason for the payment transaction, eg., a charity payment, or  a commercial agreement between the creditor and the debtor.
    Not applicable for :-
    UK FPS
    Push To Card`,
    properties: {
        code: {
            type: 'ServiceLevelCode',
        },
        type: {
            type: 'Enum',
        },
    },
} as const;
