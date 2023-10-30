/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AccountIdentification = {
    type: 'string',
    description: `Maximum length supported for each instrument and market :-
    SEPA Instant - 8 (numeric only)

    US RTP - 9 (Routing and Transit Number -> alphabetic characters may be present)

    Brazil RTP - 8 `,
    maxLength: 128,
} as const;
