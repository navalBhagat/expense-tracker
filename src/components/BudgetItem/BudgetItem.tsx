// react imports
import React from "react";

// helpers
import { calculateSpentByBudget } from "../../helper";

// types
import { Budget } from "../../types";

// components
import { BudgetProgress } from "./BudgetProgress";
import { DeleteButton } from "./DeleteButton";
import { DetailsButton } from "./DetailsButton";

type BudgetItemProps = {
  budget: Budget;
  showDelete?: boolean;
};

export const BudgetItem: React.FC<BudgetItemProps> = ({
  budget,
  showDelete = false,
}) => {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBudget(id);

  const style = { "--accent": color } as React.CSSProperties;

  return (
    <div className="budget" style={style}>
      <BudgetProgress name={name} amount={amount} spent={spent} />
      {showDelete ? <DeleteButton /> : <DetailsButton id={id} />}
    </div>
  );
};
