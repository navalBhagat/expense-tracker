import { deleteExpenseAction } from "./deleteExpense";

export async function expensesAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);
}
