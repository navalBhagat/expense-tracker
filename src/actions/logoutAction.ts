// rrd imports
import { redirect } from "react-router-dom";

// helpers
import { deleteItem } from "../helpers";

// Library imports
import { toast } from "react-toastify";

export async function logoutAction() {
  // delete the user
  deleteItem({ key: "budgets" });
  deleteItem({ key: "expenses" });
  deleteItem({ key: "user" });
  toast.success("You've successfully logged out!");

  // return redirect
  return redirect("/");
}
