/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Callbacks = {
    type: 'array',
    contains: {
        properties: {
            endToEndId: {
                type: 'string',
                maxLength: 128,
            },
            firmRootId: {
                type: 'string',
                maxLength: 128,
            },
            clearingSystemReference: {
                type: 'string',
                description: `The clearing system reference`,
                maxLength: 128,
            },
            createDateTime: {
                type: 'string',
            },
            paymentStatus: {
                type: 'Enum',
            },
            exceptions: {
                type: 'array',
                contains: {
                    properties: {
                        errorCode: {
                            type: 'string',
                            maxLength: 32,
                        },
                        errorDescription: {
                            type: 'string',
                            maxLength: 1024,
                        },
                        ruleDefinition: {
                            type: 'string',
                            maxLength: 128,
                        },
                        externalCode: {
                            type: 'string',
                            maxLength: 32,
                        },
                    },
                },
            },
            fx: {
                type: 'FxApplied',
            },
        },
    },
} as const;
