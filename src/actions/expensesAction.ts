import { deleteExpenseAction } from "./deleteExpenseAction";

export async function expensesAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // delete expense actioon
  if (_action === "deleteExpense") await deleteExpenseAction(values);

  return null;
}
