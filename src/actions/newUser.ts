// library imports
import { toast } from "react-toastify";

export function newUserAction(values: any) {
  try {
    // @ts-ignore
    localStorage.setItem("userName", JSON.stringify(values.userName));
    return toast.success(`Welcome, ${values.userName}`);
  } catch {
    throw new Error("There was a problem creating your account.");
  }
}
