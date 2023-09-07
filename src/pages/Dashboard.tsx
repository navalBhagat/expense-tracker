// react imports
import React from "react";

// rrd imports
import { Link, useLoaderData } from "react-router-dom";

// types
import { Budget, Expense, User } from "../types";

// components
import { Welcome } from "../components/Dashboard/Welcome";
import { SignUp } from "../components/SplashScreen/SignUp";

type DashboardProps = {
  user: User;
  budgets: Budget[];
  expenses: Expense[];
};

export const Dashboard = () => {
  const { user, budgets, expenses } = useLoaderData() as DashboardProps;
  return (
    <>
      {user ? (
        <Welcome
          userName={user.userName}
          budgets={budgets}
          expenses={expenses}
        />
      ) : (
        <SignUp />
      )}
    </>
  );
};
