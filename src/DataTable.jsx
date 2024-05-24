import { For, createEffect, createSignal } from "solid-js";

function Row(props) {
  const item = () => props.item;

  const removeTransaction = () => {
    const copy = [...props.data.list];
    const index = props.data.list.indexOf(item());
    copy.splice(index, 1);
    props.setData("list", copy);
  };

  return (
    <div class='row grid grid-cols-5 border-b border-patina-500 last:border-b-0'>
      <Cell value={item().transaction_id} />
      <Cell value={item().transaction_date} />
      <Cell value={item().transaction_type} />
      <Cell value={item().transaction_description} />
      <Cell
        value={
          <div class='flex justify-between items-center w-full'>
            <button
              onClick={removeTransaction}
              class='bg-patina-400 text-white px-2 py-1 h-7 rounded-lg'
            >
              Delete
            </button>
            <div
              class='w-7 h-7 rounded-lg top-0 right-0'
              classList={
                item().transaction_amount > 0
                  ? { "bg-green-500": true }
                  : { "bg-red-500": true }
              }
            />
          </div>
        }
      />
    </div>
  );
}

function Cell(props) {
  return (
    <div class='cell w-full border-r border-patina-500 last:border-r-0 py-2 px-4 flex justify-start items-center'>
      {props.value}
    </div>
  );
}

export default function DataTable(props) {
  const [total, setTotal] = createSignal(0);

  createEffect(() => {
    const amounts = props.data.list.map((i) => i.transaction_amount);
    setTotal(amounts.reduce((a, b) => a + b, 0));
  });

  return (
    <div class='w-2/3 h-fit'>
      <div class='border border-patina-500 rounded-lg bg-white overflow-hidden'>
        <div id='table' class='flex flex-col'>
          <div class='row grid grid-cols-5 border-b border-patina-500 last:border-b-0 bg-patina-200 font-semibold italic'>
            <Cell value='Id' />
            <Cell value='Date' />
            <Cell value='Type' />
            <Cell value='Description' />
            <Cell value='Action' />
          </div>
          <For each={props.data.list}>
            {(row) => (
              <Row item={row} data={props.data} setData={props.setData} />
            )}
          </For>
        </div>
      </div>
      <div class='mt-4'>
        <span class='font-bold'>Amount: </span>
        <span>{total()}</span>
      </div>
    </div>
  );
}
