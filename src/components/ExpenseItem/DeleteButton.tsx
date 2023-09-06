import React from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

// types
import { Expense } from "../../types";

type DeleteButtonProps = {
  expense: Expense;
};

export const DeleteButton: React.FC<DeleteButtonProps> = ({ expense }) => {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="post">
      <input type="hidden" name="_action" value="deleteExpense" />
      <input type="hidden" name="expenseId" value={expense.id} />
      <button
        type="submit"
        className="btn btn--warning"
        aria-label={`Delete ${expense.name} expense`}
      >
        <TrashIcon width={20} />
      </button>
    </fetcher.Form>
  );
};
