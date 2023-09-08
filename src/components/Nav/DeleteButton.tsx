import React from "react";

// rrd imports
import { Form } from "react-router-dom";

// library
import { TrashIcon } from "@heroicons/react/24/solid";

export const DeleteButton = () => {
  return (
    <Form
      method="post"
      action="/delete"
      onSubmit={(event) => {
        // @ts-ignore
        if (!confirm("Delete user and all data?")) {
          event.preventDefault();
        }
      }}
    >
      <button type="submit" className="btn btn--warning">
        <span>Delete User</span>
        <TrashIcon width={20} />
      </button>
    </Form>
  );
};
