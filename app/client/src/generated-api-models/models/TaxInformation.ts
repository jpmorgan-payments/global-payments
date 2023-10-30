/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * mandatory for Brazil PIX and Chile Low value ACH payments
 * Optional for Mexico RTP
 */
export type TaxInformation = {
    /**
     * Applicable only for Mexico RTP
     */
    taxAmount?: number;
    creditorTaxInformation?: {
        /**
         * Maximum lengths allowed per instrument/market :-
         * ACH Chile - 35
         */
        taxId: string;
        taxpayerCategory: TaxInformation.taxpayerCategory;
    };
    debtorTaxInformation?: {
        taxId: string;
    };
};

export namespace TaxInformation {

    export enum taxpayerCategory {
        INDIVIDUAL = 'INDIVIDUAL',
        CORPORATE = 'CORPORATE',
    }


}

