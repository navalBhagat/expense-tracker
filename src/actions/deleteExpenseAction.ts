// library imports
import { toast } from "react-toastify";

// helpers
import { deleteItem } from "../helpers";
import { deleteExpenseById } from "./api/deleteExpenseById";

export async function deleteExpenseAction(values: any) {
  try {
    // persist in database
    await deleteExpenseById(values.expenseId as string);

    // delete an expense
    deleteItem({ key: "expenses", id: values.expenseId as string });
    return toast.success("Expense deleted!");
  } catch {
    throw new Error("There was a problem deleting your expense.");
  }
}
