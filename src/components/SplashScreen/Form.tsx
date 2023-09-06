import React from "react";

// rrd imports
import { Form } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

export const CreateAccountForm = () => {
  return (
    <Form method="post">
      <input type="hidden" name="_action" value="newUser" />
      <input
        type="text"
        name="userName"
        required
        placeholder="What is your name?"
        aria-label="Your Name"
        autoComplete="given-name"
      />
      <button type="submit" className="btn btn--dark">
        <span>Create Account</span>
        <UserPlusIcon width={20} />
      </button>
    </Form>
  );
};
