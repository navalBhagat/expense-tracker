import React from "react";

// types
import { Expense } from "../../types";

// components
import { ExpenseItem } from "../ExpenseItem/ExpenseItem";

type TableBodyProps = {
  showBudget: boolean;
  expenses: Expense[];
};

export const TableBody: React.FC<TableBodyProps> = ({
  showBudget,
  expenses,
}) => {
  return (
    <tbody>
      {expenses.map((expense) => (
        <tr key={expense.id}>
          <ExpenseItem expense={expense} showBudget={showBudget} />
        </tr>
      ))}
    </tbody>
  );
};
