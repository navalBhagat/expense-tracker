// helpers
import { wait } from "../helpers";

// _actions
import { findOrCreateUserAction } from "./newUser";
import { createBudgetAction } from "./createBudget";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";

export async function dashboardAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // create user action
  if (_action === "findOrCreateUser") await findOrCreateUserAction(values);

  // create budget action
  if (_action === "createBudget") createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
