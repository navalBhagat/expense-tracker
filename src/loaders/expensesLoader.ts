import { fetchData } from "../helpers";

export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}
