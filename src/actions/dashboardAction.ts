// _actions
import { findOrCreateUserAction } from "./api/findOrCreateNewUser";
import { getBudgetsByIds } from "./api/getBudgetsByIds";
import { getExpensesByBudgetIds } from "./api/getExpensesByBudgetIds";
import { createBudgetAction } from "./createBudget";
import { createExpenseAction } from "./createExpense";
import { deleteExpenseAction } from "./deleteExpense";

export async function dashboardAction({ request }: any) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // create user action and extract budgets if present
  if (_action === "findOrCreateUser") {
    const user = await findOrCreateUserAction(values);
    await getBudgetsByIds(user);
    await getExpensesByBudgetIds(user);
  }

  // create budget action
  if (_action === "createBudget") createBudgetAction(values);

  // create expense action
  if (_action === "createExpense") createExpenseAction(values);

  // delete expense actioon
  if (_action === "deleteExpense") deleteExpenseAction(values);

  return null;
}
