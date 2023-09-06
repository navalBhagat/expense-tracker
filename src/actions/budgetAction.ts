// actions
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";

export async function budgetAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data) as Record<
    string,
    unknown
  >;

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
