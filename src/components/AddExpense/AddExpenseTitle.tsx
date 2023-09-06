import React from "react";

// types
import { Budget } from "../../types";

type AddExpenseTitleProps = {
  budgets: Budget[];
};

export const AddExpenseTitle: React.FC<AddExpenseTitleProps> = ({
  budgets,
}) => {
  return (
    <h2 className="h3">
      Add New{" "}
      <span className="accent">
        {budgets.length === 1 &&
          `${budgets.map((budget: Budget) => budget.name)}`}
      </span>{" "}
      Expense
    </h2>
  );
};
