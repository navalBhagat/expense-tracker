import React from "react";

// rrd imports
import { Form } from "react-router-dom";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

export const DeleteButton = () => {
  return (
    <div className="flex-sm">
      <Form
        method="post"
        action="delete"
        onSubmit={(event) => {
          // @ts-ignore
          if (!confirm("Are you sure you want to delete this budget?")) {
            event.preventDefault();
          }
        }}
      >
        <button type="submit" className="btn">
          <span>Delete Budget</span>
          <TrashIcon width={20} />
        </button>
      </Form>
    </div>
  );
};
