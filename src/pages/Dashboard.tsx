// react imports
import React from "react";

// rrd imports
import { Link, useLoaderData } from "react-router-dom";

// types
import { Budget, Expense } from "../types";

// components
import { SignUp } from "../components/SplashScreen/SignUp";
import { NoBudgets } from "../components/Dashboard/NoBudgets";
import { DashboardForms } from "../components/Dashboard/DashboardForms";
import { ExistingBudgets } from "../components/Dashboard/ExistingBudgets";
import { ExistingExpenses } from "../components/Dashboard/ExistingExpenses";

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
        <div className="dashboard">
          <h1>
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <DashboardForms budgets={budgets} />
                <ExistingBudgets budgets={budgets} />
                <ExistingExpenses expenses={expenses} />
              </div>
            ) : (
              <NoBudgets />
            )}
          </div>
        </div>
      ) : (
        <SignUp />
      )}
    </>
  );
};
