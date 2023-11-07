import {
  PaymentInitationDetails,
  PaymentInitiationResponse,
} from 'generated-api-models';

export const createPaymentResponse = (
  request: PaymentInitationDetails,
): PaymentInitiationResponse => {
  return {
    paymentInitiationResponse: {
      endToEndId: request.payments.paymentIdentifiers.endToEndId,
      firmRootId: crypto.randomUUID(),
    },
  };
};
