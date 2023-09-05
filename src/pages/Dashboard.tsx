// react imports
import React from "react";

// rrd imports
import { Link, useLoaderData } from "react-router-dom";

// helper functions
import {
  createBudget,
  createExpense,
  deleteItem,
  fetchData,
  wait,
} from "../helper";

// components
import { Intro } from "../components/Intro";
import { AddBudgetForm } from "../components/AddBudgetForm";
import { AddExpenseForm } from "../components/AddExpenseForm";
import { BudgetItem } from "../components/BudgetItem";
import { Table } from "../components/Table";

// library imports
import { toast } from "react-toastify";

// types
import { Budget, Expense } from "../types";

// loader
export function dashboardLoader() {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  const expenses = fetchData("expenses");
  return { userName, budgets, expenses };
}

// action
// @ts-ignore
export async function dashboardAction({ request }) {
  await wait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // new user action
  if (_action === "newUser") {
    try {
      // @ts-ignore
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome, ${values.userName}`);
    } catch {
      throw new Error("There was a problem creating your account.");
    }
  }

  // create budget action
  if (_action === "createBudget") {
    try {
      // create budget
      createBudget({
        name: values.newBudget,
        amount: values.newBudgetAmount,
      });
      return toast.success("Budget created");
    } catch {
      throw new Error("There was a problem creating your budget.");
    }
  }

  // create expense action
  if (_action === "createExpense") {
    try {
      // create an expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created!`);
    } catch {
      throw new Error("There was a problem creating your expense.");
    }
  }

  // delete expense actioon
  if (_action === "deleteExpense") {
    try {
      // delete an expense
      deleteItem({ key: "expenses", id: values.expenseId });
      return toast.success("Expense deleted!");
    } catch {
      throw new Error("There was a problem deleting your expense.");
    }
  }
}

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
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>

                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>

                {expenses && expenses.length > 0 && (
                  <div className="grid-md">
                    <h2>Recent Expenses</h2>
                    <Table
                      expenses={expenses
                        .sort((a, b) => b.createdAt - a.createdAt)
                        .slice(0, 8)}
                    />
                    {expenses.length > 8 && (
                      <Link to="expenses" className="btn btn--dark">
                        View All Expenses
                      </Link>
                    )}
                  </div>
                )}
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgeting is the secret to finanical freedom.</p>
                <p>Create a budget to get started!</p>
                <AddBudgetForm />
              </div>
            )}
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
};
