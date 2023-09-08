// types
import { Expense, User } from "../../types";

export async function getExpensesByBudgetIds(user: User) {
  try {
    const budgetIds = user.budgets;

    // Define the request options
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(budgetIds),
    };

    const data = await fetch(
      "http://localhost:8080/expenses",
      requestOptions
    ).then((res) => {
      return res.json();
    });

    const expenses: Expense[] = data as Expense[];
    localStorage.setItem("expenses", JSON.stringify(expenses));
  } catch {
    throw new Error("There was a problem retrieving your expenses.");
  }
}
