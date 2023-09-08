// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems } from "../helpers";

// types
import { Expense } from "../types";
import { deleteBudgetAndExpenses } from "./api/deleteBudgetAndExpenses";

type DeleteBudgetProps = {
  params?: any;
};

export const deleteBudgetAction = ({ params }: DeleteBudgetProps) => {
  try {
    // persist in database
    deleteBudgetAndExpenses(params.id as string);

    deleteItem({ key: "budgets", id: params.id });
    const expenses = getAllMatchingItems({
      category: "expenses",
      key: "budgetId",
      value: params.id,
    });

    expenses.forEach((expense: Expense) => {
      deleteItem({ key: "expenses", id: expense.id });
    });

    toast.success("Budget deleted successfully");
  } catch {
    throw new Error("There was a problem deleting your budget.");
  }

  return redirect("/");
};
