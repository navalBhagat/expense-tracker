import React from "react";

// rrd imports
import { Link } from "react-router-dom";

// library imports
import { BanknotesIcon } from "@heroicons/react/24/outline";

type DetailsButtonProps = {
  id: string;
};

export const DetailsButton: React.FC<DetailsButtonProps> = ({ id }) => {
  return (
    <div className="flex-sm">
      <Link to={`budget/${id}`} className="btn">
        <span>View Details</span> <BanknotesIcon width={20} />{" "}
      </Link>
    </div>
  );
};
