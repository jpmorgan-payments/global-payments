/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ErrorsInit = {
    properties: {
        endToEndId: {
            type: 'string',
            maxLength: 128,
        },
        errorDetails: {
            type: 'array',
            contains: {
                type: 'ErrorDetails',
            },
        },
    },
} as const;
