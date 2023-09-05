// react imports
import React from "react";

// component import
import { ExpenseItem } from "./ExpenseItem";
import { Expense } from "../types";

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
        <thead>
          <tr>
            {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
              (i, index) => (
                <th key={index}>{i}</th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <ExpenseItem expense={expense} showBudget={showBudget} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
