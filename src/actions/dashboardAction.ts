// _actions
import { createBudgetAction } from "./createBudget";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";
import { findOrCreateUserAction } from "./findOrCreateUser";

export async function dashboardAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // create user action and extract budgets and expenses if present
  if (_action === "findOrCreateUser") await findOrCreateUserAction(values);

  // create budget action
  if (_action === "createBudget") await createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
