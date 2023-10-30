/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccountIdWrapper } from './AccountIdWrapper';

export type CreditorAccount = (AccountIdWrapper & {
    /**
     * Mandatory for :
     * 1. Card Payments
     * 2. Venmo/Paypal wallets
     * 3. Interac
     * 4. India IMPS
     * 6. Malaysia RTP (Credit Transfer &amp; Direct Debit)
     * 8. Brazil RTP (Pay to account only)
     * 9. Blockchain Payments
     *
     *
     * Not supported for United States RTP
     *
     * India IMPS -
     *
     * LOAN - Loan account
     * ODFT - Overdraft
     * NREX - NonResidentExternal
     * OTHER - For Book and cross branch with VRN accounts
     * CACC - Cash Credit/Current account
     * DDA - DDA account
     * SVGS - Savings account
     *
     * SEPA Instant -
     * IBAN
     *
     * Hong Kong RTP -
     * BBAN
     *
     * Malaysia RTP -
     * LOAN
     * DFLT
     * SVGS
     * CACC
     *
     * Brazil RTP -
     * CACC
     * SLRY
     * TRAN
     * SVGS
     *
     * Mexico RTP -
     * CLABE
     * VOSTRO
     * DDA
     *
     * Alternate Payments -
     *
     * VENMO - Push to wallet
     * PAYPAL - Push to wallet
     * INTERAC - Interac canada payments
     * CARD - Push to card payments
     * ZELLE - Zelle Payments
     *
     *
     *
     * Blockchain Payments -
     * DDA
     * BDA - Blockchain Deposit Account
     *
     *
     *
     * ACH - (Chile Only)
     * SVGS
     * CACC
     * OTHER
     */
    accountType?: CreditorAccount.accountType;
    /**
     * Mandatory for pay by proxy -
     * RTP :- Singapore, Australia, Hong Kong, Malaysia, Brazil, Mexico
     * Alternate Payments :- Push To Wallet
     */
    schemeName?: {
        /**
         * Specifies the type of Proxy account. Mandatory if creditorAccount.alternateAccountIdentifier is present
         * Proprietary types applicable per market and instrument:
         *
         * RTP - Singapore :-
         * MSIDN - Mobile number
         * UEN - Unique Entity Number
         * VPA - Virtual Payment Address
         * NRIC - IC number
         *
         * RTP - Australia :-
         * EMAL - Email Address
         * TELI - Telephone Number
         * AUBN - Australia Business number
         * ORGN - Organization Id
         *
         * RTP - Malaysia :-
         * MBNO - Mobile number
         * NRIC - IC number
         * PSPT - Passport number
         * ARMN - Army or Police Number
         * BREG - Business registration number
         *
         * RTP - Hong Kong :-
         * EMAL - Email Address
         * MOBN - Mobile Number (or fixed-line number)
         * SVID - FPS Identifier
         *
         * RTP - Brazil :-
         * CPF - Tax ID of Individual
         * CNPJ - Tax ID of Corporate
         * EVP - Random Key
         * QRCD - QR Code
         * EMAL - Email id
         * MOBN - Mobile number
         *
         * RTP - Mexico :-
         * MOBN - Mobile number
         * BANK - Transfer to a Bank identifier
         * CARD - Transfer to a debit card number
         *
         * RTP - Indonesia :-
         * MOBN - Mobile number
         * EMAL - Email id
         * CARD - Transfer to a debit card number
         * ALIS - eMoney transfer
         *
         * Alternate Payments - Wallet (For Zelle only EMAL and TELI are applicable) :-
         * EMAL - Email Address
         * TELI - Telephone Number
         * ACCN - Alternate account number
         * ALIS - Alias identification
         */
        proprietary?: CreditorAccount.proprietary;
    };
    /**
     * Mandatory for Push to Card. Acceptable format - YYMM
     */
    cardExpiryDate?: string;
});

export namespace CreditorAccount {

    /**
     * Mandatory for :
     * 1. Card Payments
     * 2. Venmo/Paypal wallets
     * 3. Interac
     * 4. India IMPS
     * 6. Malaysia RTP (Credit Transfer &amp; Direct Debit)
     * 8. Brazil RTP (Pay to account only)
     * 9. Blockchain Payments
     *
     *
     * Not supported for United States RTP
     *
     * India IMPS -
     *
     * LOAN - Loan account
     * ODFT - Overdraft
     * NREX - NonResidentExternal
     * OTHER - For Book and cross branch with VRN accounts
     * CACC - Cash Credit/Current account
     * DDA - DDA account
     * SVGS - Savings account
     *
     * SEPA Instant -
     * IBAN
     *
     * Hong Kong RTP -
     * BBAN
     *
     * Malaysia RTP -
     * LOAN
     * DFLT
     * SVGS
     * CACC
     *
     * Brazil RTP -
     * CACC
     * SLRY
     * TRAN
     * SVGS
     *
     * Mexico RTP -
     * CLABE
     * VOSTRO
     * DDA
     *
     * Alternate Payments -
     *
     * VENMO - Push to wallet
     * PAYPAL - Push to wallet
     * INTERAC - Interac canada payments
     * CARD - Push to card payments
     * ZELLE - Zelle Payments
     *
     *
     *
     * Blockchain Payments -
     * DDA
     * BDA - Blockchain Deposit Account
     *
     *
     *
     * ACH - (Chile Only)
     * SVGS
     * CACC
     * OTHER
     */
    export enum accountType {
        VENMO = 'VENMO',
        PAYPAL = 'PAYPAL',
        INTERAC = 'INTERAC',
        CARD = 'CARD',
        DDA = 'DDA',
        LOAN = 'LOAN',
        ODFT = 'ODFT',
        NREX = 'NREX',
        OTHER = 'OTHER',
        CACC = 'CACC',
        SVGS = 'SVGS',
        TRAN = 'TRAN',
        CLABE = 'CLABE',
        VOSTRO = 'VOSTRO',
        IBAN = 'IBAN',
        BBAN = 'BBAN',
        DFLT = 'DFLT',
        SLRY = 'SLRY',
        BDA = 'BDA',
        ZELLE = 'ZELLE',
    }

    /**
     * Specifies the type of Proxy account. Mandatory if creditorAccount.alternateAccountIdentifier is present
     * Proprietary types applicable per market and instrument:
     *
     * RTP - Singapore :-
     * MSIDN - Mobile number
     * UEN - Unique Entity Number
     * VPA - Virtual Payment Address
     * NRIC - IC number
     *
     * RTP - Australia :-
     * EMAL - Email Address
     * TELI - Telephone Number
     * AUBN - Australia Business number
     * ORGN - Organization Id
     *
     * RTP - Malaysia :-
     * MBNO - Mobile number
     * NRIC - IC number
     * PSPT - Passport number
     * ARMN - Army or Police Number
     * BREG - Business registration number
     *
     * RTP - Hong Kong :-
     * EMAL - Email Address
     * MOBN - Mobile Number (or fixed-line number)
     * SVID - FPS Identifier
     *
     * RTP - Brazil :-
     * CPF - Tax ID of Individual
     * CNPJ - Tax ID of Corporate
     * EVP - Random Key
     * QRCD - QR Code
     * EMAL - Email id
     * MOBN - Mobile number
     *
     * RTP - Mexico :-
     * MOBN - Mobile number
     * BANK - Transfer to a Bank identifier
     * CARD - Transfer to a debit card number
     *
     * RTP - Indonesia :-
     * MOBN - Mobile number
     * EMAL - Email id
     * CARD - Transfer to a debit card number
     * ALIS - eMoney transfer
     *
     * Alternate Payments - Wallet (For Zelle only EMAL and TELI are applicable) :-
     * EMAL - Email Address
     * TELI - Telephone Number
     * ACCN - Alternate account number
     * ALIS - Alias identification
     */
    export enum proprietary {
        MSIDN = 'MSIDN',
        NRIC = 'NRIC',
        UEN = 'UEN',
        VPA = 'VPA',
        EMAL = 'EMAL',
        ORGN = 'ORGN',
        TELI = 'TELI',
        AUBN = 'AUBN',
        PSPT = 'PSPT',
        BREG = 'BREG',
        MBNO = 'MBNO',
        ARMN = 'ARMN',
        MOBN = 'MOBN',
        SVID = 'SVID',
        CPF = 'CPF',
        CNPJ = 'CNPJ',
        EVP = 'EVP',
        QRCD = 'QRCD',
        ACCN = 'ACCN',
        ALIS = 'ALIS',
    }


}

