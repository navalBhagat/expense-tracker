// library imports
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helper";

export function deleteExpenseAction(values: any) {
  try {
    // delete an expense
    deleteItem({ key: "expenses", id: values.expenseId as string });
    return toast.success("Expense deleted!");
  } catch {
    throw new Error("There was a problem deleting your expense.");
  }
}
