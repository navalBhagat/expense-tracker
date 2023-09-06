import React from "react";

// components
import { DashboardForms } from "./DashboardForms";
import { ExistingBudgets } from "./ExistingBudgets";
import { ExistingExpenses } from "./ExistingExpenses";
import { NoBudgets } from "./NoBudgets";

// types
import { Budget, Expense } from "../../types";

type WelcomeProps = {
  userName: string;
  budgets: Budget[];
  expenses: Expense[];
};

export const Welcome: React.FC<WelcomeProps> = ({
  budgets,
  userName,
  expenses,
}) => {
  return (
    <div className="dashboard">
      <h1>
        Welcome back, <span className="accent">{userName}</span>
      </h1>
      <div className="grid-sm">
        {budgets && budgets.length > 0 ? (
          <div className="grid-lg">
            <DashboardForms budgets={budgets} />
            <ExistingBudgets budgets={budgets} />
            <ExistingExpenses expenses={expenses} />
          </div>
        ) : (
          <NoBudgets />
        )}
      </div>
    </div>
  );
};
