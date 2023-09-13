// types
import { BudgetBackend, User } from "../../types";

export async function createBudgetForUser(budget: BudgetBackend) {
  // get user
  const user: User = JSON.parse(localStorage.getItem("user")!);

  // Define the request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(budget),
  };

  const data = await fetch(
    "https://expense-tracker-backend-4fsugardwq-ew.a.run.app/budget?userId=" + user.id,
    requestOptions
  ).then((res) => {
    return res.text();
  });

  // update user in local storage
  user.budgets = [...user.budgets, data];
  localStorage.setItem("user", JSON.stringify(user));

  return data as string;
}
