import React from "react";

// rrd imports
import { Link } from "react-router-dom";

// types
import { Expense } from "../../types";

// components
import { Table } from "../Table/Table";

type ExistingExpensesProps = {
  expenses: Expense[];
};

export const ExistingExpenses: React.FC<ExistingExpensesProps> = ({
  expenses,
}) => {
  return (
    <>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>Recent Expenses</h2>
          <Table
            expenses={expenses
              .sort((a, b) => b.createdAt - a.createdAt)
              .slice(0, 8)}
          />
          {expenses.length > 8 && (
            <Link to="expenses" className="btn btn--dark">
              View All Expenses
            </Link>
          )}
        </div>
      )}
    </>
  );
};
