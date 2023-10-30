import { API_URL } from 'data/constants';
import { PaymentDetailsResponse } from 'generated-api-models';
import { previousPaymentMock } from 'mocks/previousPaymentMock';
import { HttpResponse, http } from 'msw';

const previousPaymentsMock: PaymentDetailsResponse[] = previousPaymentMock;

const previousPayments = new Map();
previousPaymentsMock.map((payment) =>
  previousPayments.set(
    payment.payments?.paymentIdentifiers.endToEndId,
    JSON.stringify(payment),
  ),
);

export const handlers = [
  http.get(`${API_URL}/api/payments`, async ({ request }) => {
    const url = new URL(request.url);

    const endToEndId = url.searchParams.get('endToEndId');
    const response = previousPayments.get(endToEndId);
    if (response) {
      return HttpResponse.json(JSON.parse(response));
    }
    return new HttpResponse('Not found', {
      status: 404,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }),
];
