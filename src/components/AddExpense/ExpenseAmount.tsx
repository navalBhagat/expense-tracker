import React from "react";

export const ExpenseAmount = () => {
  return (
    <div className="grid-xs">
      <label htmlFor="newExpenseAmount">Amount</label>
      <input
        type="number"
        step="0.01"
        inputMode="decimal"
        name="newExpenseAmount"
        id="newExpenseAmount"
        placeholder="e.g., 3.50"
        required
      />
    </div>
  );
};
