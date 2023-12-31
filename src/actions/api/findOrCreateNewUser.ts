// library imports
import { toast } from "react-toastify";

// types
import { User } from "../../types";

export async function findOrCreateUser(values: any) {
  try {
    const data = await fetch(
      "https://expense-tracker-backend-4fsugardwq-ew.a.run.app/user?name=" + values.userName,
      { method: "POST" }
    ).then((res) => {
      return res.json();
    });
    const user: User = data as User;

    localStorage.setItem("user", JSON.stringify(user));
    toast.success(`Welcome, ${user.userName}`);

    return user;
  } catch {
    throw new Error("There was a problem creating your account.");
  }
}
