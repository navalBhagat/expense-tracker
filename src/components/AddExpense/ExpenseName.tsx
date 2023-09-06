import React from "react";

type ExpenseNameProps = {
  focusRef: React.MutableRefObject<null>;
};

export const ExpenseName: React.FC<ExpenseNameProps> = ({ focusRef }) => {
  return (
    <div className="grid-xs">
      <label htmlFor="newExpense">Expense Name</label>
      <input
        type="text"
        name="newExpense"
        id="newExpense"
        placeholder="e.g., Coffee"
        ref={focusRef}
        required
      />
    </div>
  );
};
