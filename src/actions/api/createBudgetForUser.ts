// helpers
import { fetchUserFromStorage } from "../../helpers";

// types
import { Budget, BudgetBackend, User } from "../../types";

export async function createBudgetForUser(budget: Budget) {
  const budgetBackend: BudgetBackend = budget;
  // get user
  const user: User = JSON.parse(localStorage.getItem("user")!);

  // Define the request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budgetBackend),
  };

  const data = await fetch(
    "http://localhost:8080/budget?userId=" + user.id,
    requestOptions
  ).then((res) => {
    return res.text();
  });

  // update user in local storage
  user.budgets = [...user.budgets, data];
  return localStorage.setItem("user", JSON.stringify(user));
}
