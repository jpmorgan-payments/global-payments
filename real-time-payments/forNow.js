
<fieldset name="paymentsIdentifiers">
<legend>Payments Identifiers</legend>
<FormInput
  label="endToEndId"
  text="End to end ID"
  name="paymentsIdentifiers[endToEndId]"
  required={true}
/>
</fieldset>

<FormInput
label="paymentAmount"
text="Payment Amount"
name="paymentAmount"
required={true}
type="number"
/>

<label htmlFor="transferType">Transfer Type</label>
<select name="transferType" id="transferType">
<option value="CREDIT">CREDIT</option>
<option value="DEBIT">DEBIT</option>
</select>

<fieldset name="debtor">
<legend>Debtor</legend>
<FormInput
  label="debtorName"
  text="Debtor Name"
  name="debtor.debtorName"
  required={true}
/>

<fieldset name="debtorAccount">
  <legend>Debtor Account</legend>
  <FormInput
    label="accountId"
    text="Account Id"
    name="debtor.debtorAccount.accountId"
    required={true}
  />
  <FormInput
    label="accountCurrency"
    text="Account Currency"
    name="debtor.debtorAccount.accountCurrency"
    required={true}
  />
</fieldset>
</fieldset>

<fieldset name="debtorAgent">
<legend>Debtor Agent</legend>
<fieldset name="financialInstitutionId">
  <legend>Financial Institution Id</legend>
  <fieldset name="clearingSystemId">
    <legend>Clearing System Id</legend>
    <FormInput
      label="id"
      text="Id"
      name="debtorAgent.financialInstitutionId.clearingSystemId.id"
      required={true}
    />
    <FormInput
      label="idType"
      text="ID Type"
      name="debtorAgent.financialInstitutionId.clearingSystemId.idType"
      required={true}
    />
  </fieldset>
</fieldset>
</fieldset>

<fieldset name="creditor">
<legend>Creditor</legend>
<FormInput
  text="Creditor Name"
  label="creditorName"
  name="creditor.creditorName"
  required
/>

<fieldset name="creditorAccount">
  <legend>Creditor Account</legend>
  <FormInput
    text="Account Id"
    id="creditorAccountId"
    name="creditor.creditorAccount.accountId"
    required
  />
  <FormInput
    text="Account Currency"
    type="text"
    id="creditorAccountCurrency"
    name="creditor.creditorAccount.accountCurrency"
    required
  />
</fieldset>
</fieldset>

<fieldset name="creditorAgent">
<legend>Creditor Agent</legend>
<fieldset name="creditorFinancialInstitutionId">
  <legend>Financial Institution Id</legend>
  <fieldset name="creditorClearingSystemId">
    <legend>Clearing System Id</legend>
    <FormInput
      text="Id"
      id="creditorId"
      name="creditorAgent.financialInstitutionId.clearingSystemId.id"
      required
    />
    <FormInput
      text="ID Type"
      id="creditorIdType"
      name="creditorAgent.financialInstitutionId.clearingSystemId.idType"
      required
    />
  </fieldset>
</fieldset>
</fieldset>