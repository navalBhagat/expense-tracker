// react imports
import React from "react";

// rrd imports
import { Link, useFetcher } from "react-router-dom";

// helpers
import {
  formatCurrency,
  formatDateToLocalString,
  getAllMatchingItems,
} from "../helper";

// library imports
import { TrashIcon } from "@heroicons/react/24/solid";

// types
import { Expense } from "../types";

type ExpenseItemProps = {
  expense: Expense;
  showBudget?: boolean;
};

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  expense,
  showBudget = true,
}) => {
  const fetcher = useFetcher();

  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  const style = { "--accent": budget.color } as React.CSSProperties;

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocalString(expense.createdAt)}</td>
      {showBudget && (
        <td>
          <Link to={`/budget/${budget.id}`} style={style}>
            {budget.name}
          </Link>
        </td>
      )}
      <td>
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
      </td>
    </>
  );
};
