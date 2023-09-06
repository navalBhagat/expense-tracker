import React from "react";

// library imports
import { PlusCircleIcon } from "@heroicons/react/24/solid";

type AddExpenseButtonProps = {
  isSubmitting: boolean;
};

export const AddExpenseButton: React.FC<AddExpenseButtonProps> = ({
  isSubmitting,
}) => {
  return (
    <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
      {isSubmitting ? (
        <span>Submitting...</span>
      ) : (
        <>
          <span>Add Expense</span>
          <PlusCircleIcon width={20} />
        </>
      )}
    </button>
  );
};
