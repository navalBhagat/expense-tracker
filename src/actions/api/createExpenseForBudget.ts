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
    "https://expense-tracker-backend-4fsugardwq-ew.a.run.app/expense",
    requestOptions
  ).then((res) => {
    return res.text();
  });

  return expenseId as string;
}
