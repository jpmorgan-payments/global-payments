/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Mandatory RTP markets :-
 *
 * Hong Kong - Mandatory
 */
export type CategoryPurpose = {
    /**
     * Not applicable for Hong Kong
     */
    code?: CategoryPurpose.code;
    /**
     * Coded form
     * Hong Kong RTP
     * For credit transfers -
     * "CXSALA" - Salary and Benefits Payment
     * "CXBSNS" - General Business Payment
     * "CXMRCH" - FPS Merchant Payment
     * "CXTOPU" - Account Top-up Payment
     *
     * Indonesia RTP
     * WEALTH_TRANSFER
     * INVESTMENT
     * PURCHASE
     * OTHER
     * CXSALA
     */
    proprietary?: CategoryPurpose.proprietary;
};

export namespace CategoryPurpose {

    /**
     * Not applicable for Hong Kong
     */
    export enum code {
        SALA = 'SALA',
        PENS = 'PENS',
        TAXS = 'TAXS',
        SUPP = 'SUPP',
    }

    /**
     * Coded form
     * Hong Kong RTP
     * For credit transfers -
     * "CXSALA" - Salary and Benefits Payment
     * "CXBSNS" - General Business Payment
     * "CXMRCH" - FPS Merchant Payment
     * "CXTOPU" - Account Top-up Payment
     *
     * Indonesia RTP
     * WEALTH_TRANSFER
     * INVESTMENT
     * PURCHASE
     * OTHER
     * CXSALA
     */
    export enum proprietary {
        CXSALA = 'CXSALA',
        CXBSNS = 'CXBSNS',
        CXMRCH = 'CXMRCH',
        CXTOPU = 'CXTOPU',
        WEALTH_TRANSFER = 'WEALTH_TRANSFER',
        INVESTMENT = 'INVESTMENT',
        PURCHASE = 'PURCHASE',
        OTHER = 'OTHER',
    }


}

