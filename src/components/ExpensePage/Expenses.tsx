import React from "react";

// components
import { Table } from "../Table/Table";

// types
import { Expense } from "../../types";

type ExpensesProps = {
  expenses: Expense[];
};

export const Expenses: React.FC<ExpensesProps> = ({ expenses }) => {
  return (
    <div className="grid-md">
      <h2>
        Recent Expenses <small>({expenses.length} total)</small>
      </h2>
      <Table expenses={expenses} />
    </div>
  );
};
