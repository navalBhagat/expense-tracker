// _actions
import { createBudgetAction } from "./createBudgetAction";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpenseAction";
import { findOrCreateUserAction } from "./findOrCreateUserAction";

export async function dashboardAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // create user action and extract budgets and expenses if present
  if (_action === "findOrCreateUser") await findOrCreateUserAction(values);

  // create budget action
  if (_action === "createBudget") await createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") await createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") await deleteExpenseAction(values);

  return null;
}
