import React from "react";

// components
import { BudgetItem } from "../../components/BudgetItem/BudgetItem";

// types
import { Budget } from "../../types";

type ExistingBudgetsProps = {
  budgets: Budget[];
};

export const ExistingBudgets: React.FC<ExistingBudgetsProps> = ({
  budgets,
}) => {
  return (
    <>
      <h2>Existing Budgets</h2>
      <div className="budgets">
        {budgets.map((budget) => (
          <BudgetItem key={budget.id} budget={budget} />
        ))}
      </div>
    </>
  );
};
