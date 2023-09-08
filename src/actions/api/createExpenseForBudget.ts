import { Expense } from "../../types";

export async function createExpenseForBudget(expense: Expense) {
  // Define the request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(expense),
  };

  const expenseId = await fetch(
    "http://localhost:8080/expense",
    requestOptions
  ).then((res) => {
    return res.text();
  });

  return expenseId as string;
}
