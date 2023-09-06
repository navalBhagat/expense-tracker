import React from "react";

// types
import { Expense } from "../../types";

// components
import { Table } from "../Table/Table";

type ExpensesProps = {
  expenses: Expense[];
  name: string;
};

export const Expenses: React.FC<ExpensesProps> = ({ expenses, name }) => {
  return (
    <>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </>
  );
};
