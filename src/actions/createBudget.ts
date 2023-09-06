// library imports
import { toast } from "react-toastify";

// helpers
import { createBudget } from "../helper";

export function createBudgetAction(values: any) {
  try {
    // create budget
    createBudget({
      name: values.newBudget,
      amount: values.newBudgetAmount,
    });
    return toast.success("Budget created");
  } catch {
    throw new Error("There was a problem creating your budget.");
  }
}
