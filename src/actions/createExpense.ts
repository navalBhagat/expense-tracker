// library imports
import { toast } from "react-toastify";

// helpers
import { createExpense } from "../helpers";

export function createExpenseAction(values: any) {
  try {
    // create an expense
    createExpense({
      name: values.newExpense as string,
      amount: values.newExpenseAmount as number,
      budgetId: values.newExpenseBudget as string,
    });
    return toast.success(`Expense ${values.newExpense} created!`);
  } catch {
    throw new Error("There was a problem creating your expense.");
  }
}
