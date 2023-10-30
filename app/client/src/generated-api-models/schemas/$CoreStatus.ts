/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CoreStatus = {
    properties: {
        createDateTime: {
            type: 'string',
        },
        status: {
            type: 'Enum',
        },
        fx: {
            type: 'FxApplied',
        },
        clearingSystemReference: {
            type: 'string',
            maxLength: 256,
        },
        exception: {
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
    },
} as const;
