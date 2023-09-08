// react imports
import React from "react";

// rrd imports
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// components
import { GoHome } from "../components/ErrorPage/GoHome";
import { GoBack } from "../components/ErrorPage/GoBack";

export const Error = () => {
  const error: any = useRouteError();
  let errorMessage = error.message || error.statusText;

  return (
    <div className="error">
      <h1>Uh oh! We've got a problem.</h1>
      <p>{errorMessage}</p>
      <div className="flex-md">
        <GoBack />
        <GoHome />
      </div>
    </div>
  );
};
