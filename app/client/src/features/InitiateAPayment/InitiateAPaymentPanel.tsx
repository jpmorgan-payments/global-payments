import { useQueryClient } from '@tanstack/react-query';
import { Panel, SuccessAlert } from 'components';
import { useMemo, useState } from 'react';
import { useForm } from '@mantine/form';
import { Container, SimpleGrid, Stack } from '@mantine/core';
import { Select, Group, Button, LoadingOverlay } from '@mantine/core';
import { createPaymentResponse } from 'data/createPaymentResponse';
enum FormStateEnum {
  LOADING = 'Making a payment',
  INITIAL = 'Review & Submit',
  COMPLETE = 'Create another payment',
}

enum PaymentTypeEnum {
  US_RTP = 'US RTP',
}

export const InitiateAPaymentPanel = () => {
  const queryClient = useQueryClient();
  const [formState, setFormState] = useState<FormStateEnum>(
    FormStateEnum.INITIAL,
  );

  const form = useForm({
    initialValues: {
      paymentType: PaymentTypeEnum.US_RTP,
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
  return (
    <Panel
      title="Initiate a Payment"
      apiCallType="POST"
      apiEndpoint="/payments"
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
