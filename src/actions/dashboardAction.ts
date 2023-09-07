// helpers
import { wait } from "../helpers";

// _actions
import { findOrCreateUserAction, newUserAction } from "./newUser";
import { createBudgetAction } from "./createBudget";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";

export async function dashboardAction({ request }: any) {
  await wait();
  const data = await request.formData();
  const { _action, _action2, ...values } = Object.fromEntries(data);

  // new user action
  // TODO: remove later
  if (_action === "newUser") newUserAction(values);

  // create user action
  if (_action2) findOrCreateUserAction(values);

  // create budget action
  if (_action === "createBudget") createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
