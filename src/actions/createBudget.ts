// library imports
import { toast } from "react-toastify";

// helpers
import { createBudget } from "../helpers";

// api calls
import { createBudgetForUser } from "./api/createBudgetForUser";

// types
import { Budget } from "../types";

export async function createBudgetAction(values: any) {
  try {
    // create budget
    const item: Budget = createBudget({
      name: values.newBudget,
      amount: values.newBudgetAmount,
    });

    // persist in database
    await createBudgetForUser(item);
    return toast.success("Budget created");
  } catch (e) {
    console.log(e);
    throw new Error("There was a problem creating your budget.");
  }
}
