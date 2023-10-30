import { PaymentDetailsResponse } from 'generated-api-models';

export const previousPaymentMock: PaymentDetailsResponse[] = [
  {
    payments: {
      requestedExecutionDate: '2023-09-04',
      debtor: {
        debtorName: 'OBGLRTPCL1 Account',
        debtorAccount: {
          accountId: 'DE88501108006231400596',
          accountType: 'IBAN',
          accountCurrency: 'EUR',
        },
      },
      debtorAgent: {
        financialInstitutionId: {
          bic: 'CHASDEFX',
        },
      },
      transferType: 'CREDIT',
      paymentIdentifiers: {
        endToEndId: 'uf1693824860398',
      },
      paymentCurrency: 'EUR',
      paymentAmount: 25,
      paymentType: 'RTP',
      creditorAgent: {
        financialInstitutionId: {
          bic: 'CHASDEFX',
        },
      },
      creditor: {
        creditorName: 'UNICORNUAT Account',
        creditorAccount: {
          accountType: 'IBAN',
          accountId: 'DE45501108000041287103',
        },
        postalAddress: {
          country: 'DE',
        },
      },
    },
    paymentStatus: {
      createDateTime: '2023-09-04T10:54:34.000',
      status: 'PENDING',
    },
    firmRootId: 'f93f7986-9be1-44c0-b7e8-9f24bec3c0ff',
  },
] as PaymentDetailsResponse[];
