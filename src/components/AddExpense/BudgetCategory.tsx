import React from "react";

// types
import { Budget } from "../../types";

type BudgetCategoryProps = {
  budgets: Budget[];
};

export const BudgetCategory: React.FC<BudgetCategoryProps> = ({ budgets }) => {
  return (
    <div className="grid-xs" hidden={budgets.length === 1}>
      <label htmlFor="newExpenseBudget">Budget Category</label>
      <select name="newExpenseBudget" id="newExpenseBudget" required>
        {budgets
          .sort((a: any, b: any) => a.createdAt - b.createdAt)
          .map((budget: Budget) => {
            return (
              <option key={budget.id} value={budget.id}>
                {budget.name}
              </option>
            );
          })}
      </select>
    </div>
  );
};
