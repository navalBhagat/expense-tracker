import React from "react";

// rrd imports
import { Link } from "react-router-dom";

// assets
import { HomeIcon } from "@heroicons/react/24/solid";

export const GoHome = () => {
  return (
    <Link to="/" className="btn btn--dark">
      <HomeIcon width={20} />
      <span>Go Home</span>
    </Link>
  );
};
