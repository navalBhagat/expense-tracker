import React from "react";

// rrd imports
import { Link } from "react-router-dom";

// types
import { Budget } from "../../types";

type BudgetLinkProps = {
  budget: Budget;
};

export const BudgetLink: React.FC<BudgetLinkProps> = ({ budget }) => {
  const style = { "--accent": budget.color } as React.CSSProperties;
  return (
    <td>
      <Link to={`/budget/${budget.id}`} style={style}>
        {budget.name}
      </Link>
    </td>
  );
};
