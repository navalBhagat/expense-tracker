import { fetchData } from "../helper";

export function expensesLoader() {
  const expenses = fetchData("expenses");
  return { expenses };
}
