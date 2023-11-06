import { PaymentInitationDetails } from 'generated-api-models';

export const USRTPPaymentInitiationMock: PaymentInitationDetails = {
  payments: {
    requestedExecutionDate: '2023-10-31',
    paymentAmount: 25,
    paymentType: 'RTP',
    paymentIdentifiers: {
      endToEndId: 'uf1698768808172',
    },
    paymentCurrency: 'USD',
    transferType: 'CREDIT',
    debtor: {
      debtorName: 'RAPID AUDIO LLC',
      debtorAccount: {
        accountId: '000000010900009',
        accountCurrency: 'USD',
      },
    },
    debtorAgent: {
      financialInstitutionId: {
        clearingSystemId: {
          id: '021000021',
          idType: 'USABA',
        },
      },
    },
    creditor: {
      creditorName: 'MORRIS ELECTRIC CONTRACTING LLC',
      creditorAccount: {
        accountId: '000000010962009',
        accountCurrency: 'USD',
      },
    },
    creditorAgent: {
      financialInstitutionId: {
        clearingSystemId: {
          id: '021000021',
          idType: 'USABA',
        },
      },
    },
  },
} as PaymentInitationDetails;

export const EURTPPaymentInitiationMock: PaymentInitationDetails = {
  payments: {
    requestedExecutionDate: '2023-10-31',
    paymentAmount: 25,
    paymentType: 'RTP',
    paymentIdentifiers: {
      endToEndId: 'uf1699288135068',
    },
    paymentCurrency: 'EUR',
    transferType: 'CREDIT',
    debtor: {
      debtorName: 'UNICORNUAT Account',
      debtorAccount: {
        accountId: 'DE45501108000041287103',
        accountCurrency: 'EUR',
        accountType: 'IBAN',
      },
    },
    debtorAgent: {
      financialInstitutionId: {
        bic: 'CHASDEFX',
      },
    },
    creditor: {
      creditorName: 'UNICORNUAT Account',
      creditorAccount: {
        accountId: 'DE45501108000041287103',
        accountCurrency: 'EUR',
      },
    },
    creditorAgent: {
      financialInstitutionId: {
        bic: 'CHASDEFX',
      },
    },
  },
} as PaymentInitationDetails;

export const UKRTPPaymentInitiationMock: PaymentInitationDetails = {
  payments: {
    requestedExecutionDate: '2023-10-31',
    paymentAmount: 25,
    paymentType: 'RTP',
    paymentIdentifiers: {
      endToEndId: 'uf1699288597432',
    },
    paymentCurrency: 'GBP',
    transferType: 'CREDIT',
    debtor: {
      debtorName: 'ACCT-0016710040025916-TITLE.1',
      debtorAccount: {
        accountId: '0040025916',
        accountCurrency: 'GBP',
      },
    },
    debtorAgent: {
      financialInstitutionId: {
        bic: 'CHASGB2L',
      },
    },
    creditor: {
      creditorName: 'ACCT-0016710022610202-TITLE.1',
      creditorAccount: {
        accountId: '0022610202',
        accountCurrency: 'EUR',
      },
    },
    creditorAgent: {
      financialInstitutionId: {
        clearingSystemId: {
          id: '185008',
        },
      },
    },
  },
} as PaymentInitationDetails;
