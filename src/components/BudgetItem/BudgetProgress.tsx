import React from "react";

// helpers
import { formatCurrency, formatPercentage } from "../../helper";

type BudgetProgressProps = {
  name: string;
  amount: number;
  spent: number;
};

export const BudgetProgress: React.FC<BudgetProgressProps> = ({
  name,
  amount,
  spent,
}) => {
  return (
    <>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurrency(amount)} Budgeted</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurrency(spent)} spent</small>
        <small>{formatCurrency(amount - spent)} remaining</small>
      </div>
    </>
  );
};
