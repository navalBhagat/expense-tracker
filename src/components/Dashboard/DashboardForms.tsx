import React from "react";

// types
import { Budget } from "../../types";

// components
import { AddBudgetForm } from "../AddBudget/AddBudgetForm";
import { AddExpenseForm } from "../AddExpense/AddExpenseForm";

type DashboardFormsProps = {
  budgets: Budget[];
};

export const DashboardForms: React.FC<DashboardFormsProps> = ({ budgets }) => {
  return (
    <div className="flex-lg">
      <AddBudgetForm />
      <AddExpenseForm budgets={budgets} />
    </div>
  );
};
