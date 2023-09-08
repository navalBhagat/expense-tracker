// library imports
import { toast } from "react-toastify";

// api
import { createExpenseForBudget } from "./api/createExpenseForBudget";

// helpers
import { createExpense } from "../helpers";

// types
import { Expense } from "../types";

export async function createExpenseAction(values: any) {
  try {
    // create an expense
    const expense: Expense = {
      name: values.newExpense as string,
      amount: values.newExpenseAmount as number,
      budgetId: values.newExpenseBudget as string,
      createdAt: Date.now(),
    };

    const expenseId = await createExpenseForBudget(expense);

    createExpense({
      expenseId: expenseId,
      name: values.newExpense as string,
      amount: values.newExpenseAmount as number,
      budgetId: values.newExpenseBudget as string,
    });
    return toast.success(`Expense ${values.newExpense} created!`);
  } catch {
    throw new Error("There was a problem creating your expense.");
  }
}
