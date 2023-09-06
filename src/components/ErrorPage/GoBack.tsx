import React from "react";

// rrd imports
import { useNavigate } from "react-router-dom";

// assets
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export const GoBack = () => {
  const navigate = useNavigate();
  return (
    <button className="btn btn--dark" onClick={() => navigate(-1)}>
      <ArrowUturnLeftIcon width={20} />
      <span>Go Back</span>
    </button>
  );
};
