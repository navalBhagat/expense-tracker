import React from "react";

export const BudgetAmount = () => {
  return (
    <div className="grid-xs">
      <label htmlFor="newBudgetAmount">Amount</label>
      <input
        type="number"
        step="0.01"
        name="newBudgetAmount"
        id="newBudgetAmount"
        placeholder="e.g., EUR 350"
        inputMode="decimal"
        required
      />
    </div>
  );
};
