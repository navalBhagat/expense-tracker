// react imports
import React from "react";

// rrd imports
import { Link, useLoaderData } from "react-router-dom";

// types
import { Budget, Expense } from "../types";

// components
import { Welcome } from "../components/Dashboard/Welcome";
import { SignUp } from "../components/SplashScreen/SignUp";

type DashboardProps = {
  userName: string;
  budgets: Budget[];
  expenses: Expense[];
};

export const Dashboard = () => {
  const { userName, budgets, expenses } = useLoaderData() as DashboardProps;
  return (
    <>
      {userName ? (
        <Welcome userName={userName} budgets={budgets} expenses={expenses} />
      ) : (
        <SignUp />
      )}
    </>
  );
};
