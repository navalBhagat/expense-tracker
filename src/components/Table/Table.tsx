// react imports
import React from "react";

// types
import { Expense } from "../../types";

// components
import { TableHead } from "./TableHead";
import { TableBody } from "./TableBody";

type TableProps = {
  expenses: Expense[];
  showBudget?: boolean;
};

export const Table: React.FC<TableProps> = ({
  expenses,
  showBudget = true,
}) => {
  return (
    <div className="table">
      <table>
        <TableHead showBudget={showBudget} />
        <TableBody showBudget={showBudget} expenses={expenses} />
      </table>
    </div>
  );
};
