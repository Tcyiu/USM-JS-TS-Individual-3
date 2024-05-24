import { onMount } from "solid-js";
import { produce } from "solid-js/store";

export default function Form(props) {
  let idRef, dateRef, typeRef, descriptionRef, amountRef;

  const addTransaction = () => {
    if (
      !idRef.value ||
      !dateRef.value ||
      !typeRef.value ||
      !descriptionRef.value ||
      !amountRef.value
    )
      return;
    props.setData(
      "list",
      produce((arr) => {
        arr.push({
          transaction_id: idRef.value,
          transaction_date: dateRef.value,
          transaction_amount: parseInt(amountRef.value),
          transaction_type: typeRef.value,
          transaction_description: descriptionRef.value,
        });
      })
    );
    clearForm();
  };

  onMount(() => {
    dateRef.valueAsDate = new Date();
  });

  const clearForm = () => {
    idRef.value = "";
    dateRef.valueAsDate = new Date();
    typeRef.value = "Debit";
    descriptionRef.value = "";
    amountRef.value = "";
  };

  return (
    <div class='ms-16 p-4 border border-patina-400 bg-white rounded-lg flex-1 h-fit'>
      <h3 class='text-xl font-bold'>Create a transaction</h3>
      <div class='mt-2 flex flex-col gap-4'>
        <input
          ref={idRef}
          placeholder='Transaction id'
          class='border-b border-patina-400'
          type='text'
          name='transaction id'
        />
        <input ref={dateRef} type='date' name='transaction date' />
        <select
          ref={typeRef}
          class='border border-patina-400 rounded-lg'
          name='transaction type'
        >
          <option value='debit'>Debit</option>
          <option value='credit'>Credit</option>
        </select>
        <textarea
          ref={descriptionRef}
          class='border border-patina-400 rounded-lg py-1 px-2 resize-none'
          name='transaction description'
          placeholder='Description...'
        />
        <input
          ref={amountRef}
          placeholder='Amount'
          class='border-b border-patina-400'
          type='number'
          name='transaction amount'
        />
      </div>
      <div class='flex gap-4 float-right'>
        <button
          onClick={addTransaction}
          class='bg-patina-400 text-white px-2 py-1 h-7 rounded-lg mt-4'
        >
          Create
        </button>
        <button
          onClick={clearForm}
          class='border border-patina-400 px-2 py-1 h-7 rounded-lg mt-4'
        >
          Clear
        </button>
      </div>
    </div>
  );
}
