import { API_URL } from 'data/constants';
import { createPaymentResponse } from 'data/createPaymentResponse';
import {
  CoreStatus,
  PaymentDetailsResponse,
  PaymentInitationDetails,
} from 'generated-api-models';
import { previousPaymentMock } from 'mocks/previousPaymentMock';
import { HttpResponse, delay, http } from 'msw';

const previousPaymentsMock: PaymentDetailsResponse[] = previousPaymentMock;

const previousPayments = new Map();
previousPaymentsMock.map((payment) =>
  previousPayments.set(
    payment.payments?.paymentIdentifiers.endToEndId,
    JSON.stringify(payment),
  ),
);

export const handlers = [
  http.post(`${API_URL}/api/tsapi/v1/payments`, async ({ request }) => {
    const payment = (await request.json()) as PaymentInitationDetails;
    const paymentDetailResponse: PaymentDetailsResponse = {
      payments: payment.payments,
      paymentStatus: {
        createDateTime: new Date().toISOString(),
        status: CoreStatus.status.PENDING,
      },
    };
    previousPayments.set(
      payment.payments.paymentIdentifiers.endToEndId,
      JSON.stringify(paymentDetailResponse),
    );
    const response = createPaymentResponse(payment);
    await delay();
    return HttpResponse.json(response);
  }),

  http.get(`${API_URL}/api/tsapi/v1/payments`, async ({ request }) => {
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
