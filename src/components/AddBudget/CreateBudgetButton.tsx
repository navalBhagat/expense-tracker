import React from "react";

// library imports
import { CurrencyEuroIcon } from "@heroicons/react/24/solid";

type CreateBudgetButtonProps = {
  isSubmitting: boolean;
};

export const CreateBudgetButton: React.FC<CreateBudgetButtonProps> = ({
  isSubmitting,
}) => {
  return (
    <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
      {isSubmitting ? (
        <span>Submitting...</span>
      ) : (
        <>
          <span>Create Budget</span>
          <CurrencyEuroIcon width={20} />
        </>
      )}
    </button>
  );
};
