import { PaymentInitationDetails } from 'generated-api-models';

export const UsRtpPaymentCreateMock: PaymentInitationDetails = {
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
