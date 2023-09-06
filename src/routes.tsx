import React from "react";

// Pages
import { Dashboard } from "./pages/Dashboard";
import { BudgetPage } from "./pages/BudgetPage";
import { Error } from "./pages/Error";
import { ExpensesPage } from "./pages/ExpensesPage";

// Layouts
import { Main, mainLoader } from "./layouts/Main";

// Actions
import { logoutAction } from "./actions/logout";
import { deleteBudget } from "./actions/deleteBudget";
import { budgetAction } from "./actions/budgetAction";
import { expensesAction } from "./actions/expensesAction";
import { dashboardAction } from "./actions/dashboardAction";

// Loaders
import { budgetLoader } from "./loaders/budgetLoader";
import { expensesLoader } from "./loaders/expensesLoader";
import { dashboardLoader } from "./loaders/dashboardLoader";

export const routes = [
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
        errorElement: <Error />,
      },
      {
        path: "budget/:id",
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
        children: [
          {
            path: "delete",
            action: deleteBudget,
          },
        ],
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
];
