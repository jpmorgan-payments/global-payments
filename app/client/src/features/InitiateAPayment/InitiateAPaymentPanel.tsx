import { Panel, SuccessAlert } from 'components';
import { useMemo, useState } from 'react';
import { useForm } from '@mantine/form';
import { Container, SimpleGrid, Stack } from '@mantine/core';
import { Select, Group, Button, LoadingOverlay } from '@mantine/core';
import { createPaymentResponse } from 'data/createPaymentResponse';
import { UsRtpPaymentCreateMock } from 'mocks/usRtpPaymentCreateMock';
import { USRTPDebtorMockValues } from 'mocks/debtorMockValues';
import { Debtor } from 'generated-api-models';
enum FormStateEnum {
  LOADING = 'Making a payment',
  INITIAL = 'Review & Submit',
  COMPLETE = 'Create another payment',
}

enum PaymentTypeEnum {
  US_RTP = 'US RTP',
}

type FormValuesType = {
  paymentType?: PaymentTypeEnum;
  debtor?: string;
};

const convertToPaymentRequest = (values: FormValuesType) => {
  switch (values.paymentType) {
    case PaymentTypeEnum.US_RTP:
      const response = UsRtpPaymentCreateMock;
      response.payments.paymentIdentifiers.endToEndId = crypto.randomUUID();
      if (values.debtor) {
        response.payments.debtor = JSON.parse(values.debtor);
      }
      return response;
    default:
      return UsRtpPaymentCreateMock;
  }
};

export const InitiateAPaymentPanel = () => {
  const [formState, setFormState] = useState<FormStateEnum>(
    FormStateEnum.INITIAL,
  );

  const form = useForm({
    initialValues: {
      paymentType: PaymentTypeEnum.US_RTP,
      debtor: JSON.stringify(USRTPDebtorMockValues[0]),
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
    return {
      debtor: convertToSelectValue(USRTPDebtorMockValues, 'debtorName'),
      creditor: {},
    };
  }, [form.values.paymentType]);

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
        {formState !== FormStateEnum.COMPLETE ? (
          <form onSubmit={form.onSubmit(() => console.log('here'))}>
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
                  data={Object.values(PaymentTypeEnum)}
                  {...form.getInputProps('paymentType')}
                />
                <Select
                  label="Debtor details"
                  placeholder="Choose debtor details"
                  required
                  data={selectOptions.debtor}
                  {...form.getInputProps('debtor')}
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
              "You're payment request has been successful. Check out the table below to see further actions."
            }
            buttonText={formState}
            resetForm={resetForm}
          />
        )}
      </Container>
    </Panel>
  );
};
