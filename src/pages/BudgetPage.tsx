// react imports
import React from "react";

// rrd imports
import { useLoaderData } from "react-router-dom";

// components
import { BudgetItem } from "../components/BudgetItem/BudgetItem";
import { AddExpenseForm } from "../components/AddExpense/AddExpenseForm";
import { Title } from "../components/BudgetPage/Title";
import { Expenses } from "../components/BudgetPage/Expenses";

// types
import { Budget, Expense } from "../types";

type BudgetPageProps = {
  budget: Budget;
  expenses: Expense[];
};

export const BudgetPage = () => {
  const { budget, expenses } = useLoaderData() as BudgetPageProps;
  const style = { "--accent": budget.color } as React.CSSProperties;

  return (
    <div className="grid-lg" style={style}>
      <Title name={budget.name} />
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete />
        <AddExpenseForm budgets={[budget]} />
      </div>
      <Expenses expenses={expenses} name={budget.name} />
    </div>
  );
};
