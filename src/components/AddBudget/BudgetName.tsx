import React from "react";

type BudgetNameProps = {
  focusRef: React.MutableRefObject<null>;
};

export const BudgetName: React.FC<BudgetNameProps> = ({ focusRef }) => {
  return (
    <div className="grid-xs">
      <label htmlFor="newBudget">Budget Name</label>
      <input
        type="text"
        name="newBudget"
        id="newBudget"
        placeholder="e.g., Groceries"
        required
        ref={focusRef}
      />
    </div>
  );
};
