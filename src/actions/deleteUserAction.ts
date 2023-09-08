import { redirect } from "react-router-dom";

// types
import { User } from "../types";

// helpers
import { deleteItem } from "../helpers";

// library imports
import { toast } from "react-toastify";

export async function deleteUserAction() {
  const user: User = JSON.parse(localStorage.getItem("user")!);

  // delete the user
  deleteItem({ key: "budgets" });
  deleteItem({ key: "expenses" });
  deleteItem({ key: "user" });

  // persist in database
  const requestOptions = {
    method: "DELETE",
  };

  fetch("http://localhost:8080/user?userId=" + user.id, requestOptions);

  toast.success("You've successfully logged out!");

  return redirect("/");
}
