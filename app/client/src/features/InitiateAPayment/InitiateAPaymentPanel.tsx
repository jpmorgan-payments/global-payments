import { Panel, SuccessAlert } from 'components';
import { useMemo, useState } from 'react';
import { useForm, isInRange } from '@mantine/form';
import {
  Anchor,
  Container,
  NumberInput,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { Select, Group, Button, LoadingOverlay } from '@mantine/core';
import { createPaymentResponse } from 'data/createPaymentResponse';
import {
  USRTPPaymentInitiationMock,
  EURTPPaymentInitiationMock,
  UKRTPPaymentInitiationMock,
} from 'mocks/PaymentInitiationDetailsMock';
import {
  USRTPDebtorMockValues,
  USRTPCreditorMockValues,
  EURTPDebtorMockValues,
  EURTPCreditorMockValues,
  UKRTPCreditorMockValues,
  UKRTPDebtorMockValues,
} from 'mocks/accountDetailsMocks';
import { DateInput } from '@mantine/dates';
import { useInitiatePayment } from './hooks/useInitiatePayment';
import { useQueryClient } from '@tanstack/react-query';
import { TransactionManagement } from 'shared.types';
import { PAYMENTS_AUTHORISE_API } from 'data/constants';
enum FormStateEnum {
  LOADING = 'Making a payment',
  INITIAL = 'Review & Submit',
  COMPLETE = 'Create another payment',
}

enum PaymentTypeEnum {
  US_RTP = 'US RTP',
  EU_SEPA_RTP = 'EU RTP (SEPA)',
  UK_RTP = 'UK RTP',
}

type FormValuesType = {
  paymentType?: PaymentTypeEnum;
  debtor?: string;
  creditor?: string;
  amount?: number;
  date?: Date;
};

const convertToPaymentRequest = (values: FormValuesType) => {
  let response;
  switch (values.paymentType) {
    case PaymentTypeEnum.EU_SEPA_RTP:
      response = EURTPPaymentInitiationMock;
      break;
    case PaymentTypeEnum.UK_RTP:
      response = UKRTPPaymentInitiationMock;
      break;
    default:
      response = USRTPPaymentInitiationMock;
  }
  response.payments.paymentIdentifiers.endToEndId = `gp-${Date.now()}`;
  if (values.debtor) {
    response.payments.debtor = JSON.parse(values.debtor);
  }
  if (values.creditor) {
    response.payments.creditor = JSON.parse(values.creditor);
  }
  if (values.date) {
    response.payments.requestedExecutionDate = values.date
      .toISOString()
      .split('T')[0];
  }
  response.payments.paymentAmount = values.amount || 25;
  return response;
};

export const InitiateAPaymentPanel = ({
  endToEndIds,
  setEndToEndIds,
}: TransactionManagement) => {
  const [formState, setFormState] = useState<FormStateEnum>(
    FormStateEnum.INITIAL,
  );
  const queryClient = useQueryClient();
  const { mutate: initiatePayment } = useInitiatePayment();

  const form = useForm({
    initialValues: {
      paymentType: PaymentTypeEnum.US_RTP,
      amount: 25,
      debtor: JSON.stringify(USRTPDebtorMockValues[0]),
      creditor: JSON.stringify(USRTPCreditorMockValues[1]),
      date: new Date(),
    },
    validate: {
      amount: (value) =>
        value < 0 ? 'You must enter an amount greater than 0' : null,
    },
  });

  const resetForm = () => {
    form.reset();
    setFormState(FormStateEnum.INITIAL);
  };

  const paymentRequest = useMemo(
    () => convertToPaymentRequest(form.values),
    [form.values],
  );
  const paymentResponse = useMemo(
    () => createPaymentResponse(paymentRequest),
    [form.values],
  );

  const convertToSelectValue = <Obj, FirstKey extends keyof Obj>(
    obj: Obj[],
    firstKey: FirstKey,
  ) => {
    return obj.map((value, index) => {
      return {
        key: index,
        value: JSON.stringify(value),
        label: value[firstKey],
      };
    });
  };

  const selectOptions = useMemo(() => {
    let selectValues;
    switch (form.values.paymentType) {
      case PaymentTypeEnum.EU_SEPA_RTP:
        selectValues = {
          debtor: convertToSelectValue(EURTPDebtorMockValues, 'debtorName'),
          creditor: convertToSelectValue(
            EURTPCreditorMockValues,
            'creditorName',
          ),
        };
        break;
      case PaymentTypeEnum.UK_RTP:
        selectValues = {
          debtor: convertToSelectValue(UKRTPDebtorMockValues, 'debtorName'),
          creditor: convertToSelectValue(
            UKRTPCreditorMockValues,
            'creditorName',
          ),
        };
        break;
      default:
        selectValues = {
          debtor: convertToSelectValue(USRTPDebtorMockValues, 'debtorName'),
          creditor: convertToSelectValue(
            USRTPCreditorMockValues,
            'creditorName',
          ),
        };
    }
    form.setFieldValue('debtor', selectValues.debtor[0].value);
    form.setFieldValue('creditor', selectValues.creditor[1].value);
    return selectValues;
  }, [form.values.paymentType]);

  const submitAPayment = () => {
    setFormState(FormStateEnum.LOADING);
    initiatePayment(
      {
        paymentRequest: paymentRequest,
      },
      {
        onSuccess: (data) => {
          queryClient.setQueryData(
            ['paymentsInitiation', data.paymentInitiationResponse?.endToEndId],
            data,
          );
          setEndToEndIds([
            ...endToEndIds,
            data.paymentInitiationResponse?.endToEndId || '',
          ]);
        },
        onSettled: () => {
          setFormState(FormStateEnum.COMPLETE);
        },
      },
    );
  };
  return (
    <Panel
      title="Initiate a Payment"
      apiCallType="POST"
      apiEndpoint="/payments"
      requestBody={paymentRequest}
      responseBody={paymentResponse}
      objectDisplayHeight={600}
    >
      <Container pos="relative">
        <Text c="dimmed" fs="italic">
          This is the Initiate a Payment API call. You can update the JSON
          request by altering the fields below. We have autofilled some fields
          for test data. Once you submit a payment it will appear in the table
          below and allow you to perform further actions. Check out the API
          specification to find out more{' '}
          <Anchor href={PAYMENTS_AUTHORISE_API} target="_blank">
            here.
          </Anchor>
        </Text>
        <br />
        {formState !== FormStateEnum.COMPLETE ? (
          <form onSubmit={form.onSubmit(submitAPayment)}>
            <LoadingOverlay
              visible={formState === FormStateEnum.LOADING}
              overlayBlur={2}
            />
            <SimpleGrid
              cols={1}
              breakpoints={[
                { minWidth: 'md', cols: 2 },
                { minWidth: 'lg', cols: 1 },
                { minWidth: 'xl', cols: 1 },
              ]}
            >
              <Stack>
                <Select
                  label="Select Payment Type"
                  placeholder="Choose Payment Type"
                  required
                  withAsterisk
                  data={Object.values(PaymentTypeEnum)}
                  {...form.getInputProps('paymentType')}
                />
                <Select
                  label="Debtor details (Account sending funds)"
                  placeholder="Choose debtor details"
                  required
                  withAsterisk
                  data={selectOptions.debtor}
                  {...form.getInputProps('debtor')}
                />
                <Select
                  label="Creditor details (Account receiving funds)"
                  placeholder="Choose creditor details"
                  required
                  withAsterisk
                  data={selectOptions.creditor}
                  {...form.getInputProps('creditor')}
                />
                <NumberInput
                  {...form.getInputProps('amount')}
                  label="Amount"
                  hideControls
                  required
                  withAsterisk
                />

                <DateInput
                  label="Payment Execution Date"
                  clearable
                  withAsterisk
                  valueFormat="YYYY-MM-DD"
                  required
                  {...form.getInputProps('date')}
                />
                <Group mt="xl" position="right">
                  <Button type="submit">{formState}</Button>
                </Group>
              </Stack>
            </SimpleGrid>
          </form>
        ) : (
          <SuccessAlert
            title="Payment successfully created!"
            successText={
              'Your payment request has been successful. Check out the table below to see further actions.'
            }
            buttonText={formState}
            resetForm={resetForm}
          />
        )}
      </Container>
    </Panel>
  );
};
