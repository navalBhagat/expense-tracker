import React from "react";

// components
import { AddBudgetForm } from "../AddBudget/AddBudgetForm";

export const NoBudgets = () => {
  return (
    <div className="grid-sm">
      <p>Personal budgeting is the secret to finanical freedom.</p>
      <p>Create a budget to get started!</p>
      <AddBudgetForm />
    </div>
  );
};
