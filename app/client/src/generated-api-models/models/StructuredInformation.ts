/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type StructuredInformation = {
    /**
     * Unique reference to unambiguously refer to the payment transaction.
     */
    creditReference?: string;
    /**
     * Applicable Faster Payment Markets -
     *
     * Malaysia
     * Max length supported - 250 characters
     *
     * US - mandatory if structuredInformation object is used
     */
    additionalRemittanceInformation?: string;
};

