// library imports
import { toast } from "react-toastify";

// types
import { User } from "../types";

export async function findOrCreateUserAction(values: any) {
  try {
    console.log("fetching");
    const data = await fetch(
      "http://localhost:8080/user?name=" + values.userName,
      { method: "POST" }
    ).then((res) => {
      return res.json();
    });
    console.log("data: ", data);
    const user: User = data as User;

    localStorage.setItem("user", JSON.stringify(user));
    return toast.success(`Welcome, ${user.userName}`);
  } catch {
    throw new Error("There was a problem creating your account.");
  }
}
