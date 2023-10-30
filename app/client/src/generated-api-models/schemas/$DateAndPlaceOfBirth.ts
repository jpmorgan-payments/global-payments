/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $DateAndPlaceOfBirth = {
    properties: {
        birthDate: {
            type: 'string',
            pattern: '[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])',
        },
        cityOfBirth: {
            type: 'string',
            maxLength: 35,
        },
        countryOfBirth: {
            type: 'string',
            maxLength: 2,
            minLength: 2,
        },
    },
} as const;
