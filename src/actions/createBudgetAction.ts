// library imports
import { toast } from "react-toastify";

// helpers
import { createBudget } from "../helpers";

// api calls
import { createBudgetForUser } from "./api/createBudgetForUser";

// types
import { Budget, BudgetBackend } from "../types";

export async function createBudgetAction(values: any) {
  try {
    // create budget
    var budget: BudgetBackend = {
      name: values.newBudget,
      amount: +values.newBudgetAmount,
      createdAt: Date.now(),
    };
    const budgetId = await createBudgetForUser(budget);
    const item: Budget = createBudget({
      id: budgetId,
      name: values.newBudget,
      amount: values.newBudgetAmount,
    });

    return toast.success("Budget created");
  } catch (e) {
    console.log(e);
    throw new Error("There was a problem creating your budget.");
  }
}
