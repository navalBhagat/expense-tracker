// actions
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpenseAction";

export async function budgetAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data) as Record<
    string,
    unknown
  >;

  // create expense action
  if (_action === "createExpense") await createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") await deleteExpenseAction(values);

  return null;
}
