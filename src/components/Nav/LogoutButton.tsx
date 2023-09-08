import React from "react";

// rrd imports
import { Form } from "react-router-dom";

// library
import { ArrowLeftOnRectangleIcon } from "@heroicons/react/24/solid";

export const LogoutButton = () => {
  return (
    <Form method="post" action="/logout">
      <button type="submit" className="btn logout">
        <span>Logout</span>
        <ArrowLeftOnRectangleIcon width={20} />
      </button>
    </Form>
  );
};
