import axios from 'axios';
import { PaymentDetailsResponse } from 'generated-api-models';
import { API_URL } from '../../../data/constants';

export const useGetPaymentByEndToEndId = async (
  endToEndId: string,
): Promise<PaymentDetailsResponse> => {
  const response = await axios.get<PaymentDetailsResponse>(
    `${API_URL}/api/payments?endToEndId=${endToEndId}`,
  );
  return response.data;
};
