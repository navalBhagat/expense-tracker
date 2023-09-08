// helpers
import { setColors } from "../../helpers";

// types
import { BudgetBackend, User } from "../../types";

export async function getBudgetsByIds(user: User) {
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
      "http://localhost:8080/budgets",
      requestOptions
    ).then((res) => {
      return res.json();
    });

    const budgets: BudgetBackend[] = data as BudgetBackend[];

    // add colors
    const budgetsWithColors = setColors(budgets);
    localStorage.setItem("budgets", JSON.stringify(budgetsWithColors));
  } catch {
    throw new Error("There was a problem retrieving your budgets.");
  }
}
