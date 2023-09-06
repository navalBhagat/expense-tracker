// react imports
import React from "react";

// rrd imports
import { useLoaderData } from "react-router-dom";

// library imports
import { Expense } from "../types";
import { Expenses } from "../components/ExpensePage/Expenses";
import { NoExpenses } from "../components/ExpensePage/NoExpenses";

type ExpensesPageProps = {
  expenses: Expense[];
};

export const ExpensesPage = () => {
  const { expenses } = useLoaderData() as ExpensesPageProps;

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>
      {expenses && expenses.length > 0 ? (
        <Expenses expenses={expenses} />
      ) : (
        <NoExpenses />
      )}
    </div>
  );
};
