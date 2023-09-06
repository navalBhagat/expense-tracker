// helpers
import { wait } from "../helper";

// _actions
import { newUserAction } from "./newUser";
import { createBudgetAction } from "./createBudget";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";

export async function dashboardAction({ request }: any) {
  await wait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user action
  if (_action === "newUser") newUserAction(values);

  // create budget action
  if (_action === "createBudget") createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
