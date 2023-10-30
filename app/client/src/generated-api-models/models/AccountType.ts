/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * - Mandatory for SEPA Instant - Use IBAN
 * - Mandatory for Blockchain Payments - DDA, BDA (Blockchain Deposit
 * Account)
 * - Mandatory for Embedded Finance Payments - `LIMITED DDA`, `EMBEDDED_DDA`, `WALLET`
 * - Field not applicable to Alternate Payments (Cards)
 */
export enum AccountType {
    DDA = 'DDA',
    VAM = 'VAM',
    IBAN = 'IBAN',
    BDA = 'BDA',
    CACC = 'CACC',
    SVGS = 'SVGS',
    CARD = 'CARD',
    LIMITED_DDA = 'LIMITED_DDA',
    EMBEDDED_DDA = 'EMBEDDED_DDA',
    WALLET = 'WALLET',
}
