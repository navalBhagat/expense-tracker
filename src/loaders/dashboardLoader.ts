// helper functions
import { fetchData } from "../helpers";

export function dashboardLoader() {
  const user = fetchData("user");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { user, budgets, expenses };
}
