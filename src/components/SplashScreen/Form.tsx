import React from "react";

// rrd imports
import { Form } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

export const AccountForm = () => {
  return (
    <Form method="post">
      // TODO: remove later
      <input type="hidden" name="_action" value="newUser" />
      <input type="hidden" name="_action2" value="findOrCreateUser" />
      <input
        type="text"
        name="userName"
        required
        placeholder="What is your name?"
        aria-label="Your Name"
        autoComplete="given-name"
      />
      <button type="submit" className="btn btn--dark">
        <span>Register/Log In</span>
        <UserPlusIcon width={20} />
      </button>
    </Form>
  );
};
