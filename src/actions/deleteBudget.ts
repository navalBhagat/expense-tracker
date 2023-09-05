// rrd imports
import { redirect } from "react-router-dom";

// library
import { toast } from "react-toastify";

// helpers
import { deleteItem, getAllMatchingItems } from "../helper";

// types
import { Expense } from "../types";

// @ts-ignore
export function deleteBudget({ params }) {
  try {
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
}
