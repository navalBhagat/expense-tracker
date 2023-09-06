import React from "react";

// rrd imports
import { NavLink } from "react-router-dom";

export const GoHome = () => {
  return (
    <NavLink to="/" aria-label="Go to home">
      <img src={"/assets/logomark.svg"} alt="" height={30} />
      <span>Expense Tracker</span>
    </NavLink>
  );
};
