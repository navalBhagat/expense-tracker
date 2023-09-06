import React from "react";

type TableHeadProps = {
  showBudget: boolean;
};

export const TableHead: React.FC<TableHeadProps> = ({ showBudget }) => {
  return (
    <thead>
      <tr>
        {["Name", "Amount", "Date", showBudget ? "Budget" : "", ""].map(
          (i, index) => (
            <th key={index}>{i}</th>
          )
        )}
      </tr>
    </thead>
  );
};
