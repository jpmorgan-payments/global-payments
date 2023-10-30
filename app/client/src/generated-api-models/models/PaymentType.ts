/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Mandatory for RTP, ACH and Coin payments.
 * Specify the instrument type.
 *
 * Use RTP for Faster Payments
 *
 * ACH.TRF for Chile ACH Payments
 *
 * BLOCKCHAIN for Coin Payments
 */
export enum PaymentType {
    ACH_TRF = 'ACH.TRF',
    RTP = 'RTP',
    BLOCKCHAIN = 'BLOCKCHAIN',
}
