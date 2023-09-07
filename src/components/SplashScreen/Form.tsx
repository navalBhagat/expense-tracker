import React from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// library imports
import { UserPlusIcon } from "@heroicons/react/24/solid";

export const AccountForm = () => {
  const fetcher = useFetcher();

  const isSubmitting = fetcher.state === "submitting";

  return (
    <fetcher.Form method="post">
      <input type="hidden" name="_action" value="findOrCreateUser" />
      <input
        type="text"
        name="userName"
        required
        placeholder="What is your name?"
        aria-label="Your Name"
        autoComplete="given-name"
      />
      <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
        <span>Register/Log In</span>
        <UserPlusIcon width={20} />
      </button>
    </fetcher.Form>
  );
};
