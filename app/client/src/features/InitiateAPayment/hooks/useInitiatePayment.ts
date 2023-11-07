import axios, { AxiosError } from 'axios';
import { API_URL } from 'data/constants';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import {
  PaymentInitationDetails,
  PaymentInitiationResponse,
} from 'generated-api-models';

type InitiatePaymentProps = {
  paymentRequest: PaymentInitationDetails;
};

export function useInitiatePayment(): UseMutationResult<
  PaymentInitiationResponse,
  AxiosError,
  InitiatePaymentProps,
  () => void
> {
  return useMutation(
    ['initiatePayment'],
    async ({ paymentRequest }: InitiatePaymentProps) => {
      const response = await axios.post<PaymentInitiationResponse>(
        `${API_URL}/api/tsapi/v1/payments`,
        JSON.stringify(paymentRequest),
      );

      return response.data;
    },
  );
}
