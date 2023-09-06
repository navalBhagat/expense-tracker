// react imports
import React from "react";

// helpers
import {
  formatCurrency,
  formatDateToLocalString,
  getAllMatchingItems,
} from "../../helper";

// types
import { Expense } from "../../types";

// components
import { BudgetLink } from "./BudgetLink";
import { DeleteButton } from "./DeleteButton";

type ExpenseItemProps = {
  expense: Expense;
  showBudget?: boolean;
};

export const ExpenseItem: React.FC<ExpenseItemProps> = ({
  expense,
  showBudget = true,
}) => {
  const budget = getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: expense.budgetId,
  })[0];

  return (
    <>
      <td>{expense.name}</td>
      <td>{formatCurrency(expense.amount)}</td>
      <td>{formatDateToLocalString(expense.createdAt)}</td>
      {showBudget && <BudgetLink budget={budget} />}
      <td>
        <DeleteButton expense={expense} />
      </td>
    </>
  );
};
