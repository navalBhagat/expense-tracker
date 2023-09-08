import { findOrCreateUser } from "./api/findOrCreateNewUser";
import { getBudgetsByIds } from "./api/getBudgetsByIds";
import { getExpensesByBudgetIds } from "./api/getExpensesByBudgetIds";

export async function findOrCreateUserAction(values: any) {
  const user = await findOrCreateUser(values);
  await getBudgetsByIds(user);
  await getExpensesByBudgetIds(user);
}
