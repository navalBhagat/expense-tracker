// react imports
import React from "react";

// rrd imports
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

// components
import { GoHome } from "../components/ErrorPage/GoHome";
import { GoBack } from "../components/ErrorPage/GoBack";

export const Error = () => {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    errorMessage = error.error?.message || error.statusText;
  } else {
    console.log(error);
    errorMessage = "Unknown error";
  }

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
