import DataTable from "./DataTable";
import transactions from "../transaction.json";
import Form from "./Form";
import { createStore } from "solid-js/store";

export default function App() {
  const [data, setData] = createStore({ list: transactions.slice(0, 5) });
  return (
    <div class='h-dvh bg-patina-50 text-patina-950 text-sm p-4 overflow-auto'>
      <div class='flex'>
        <DataTable data={data} setData={setData} />
        <Form data={data} setData={setData} />
      </div>
    </div>
  );
}
