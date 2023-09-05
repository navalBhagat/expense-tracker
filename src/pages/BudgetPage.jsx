// rrd imports
import { useLoaderData } from "react-router-dom";

// helpers
import { createExpense, deleteItem, getAllMatchingItems } from "../helper";

// components
import { BudgetItem } from "../components/BudgetItem";
import { AddExpenseForm } from "../components/AddExpenseForm";
import { Table } from "../components/Table";

// library imports
import { toast } from "react-toastify";

// loader
export async function budgetLoader({ params }) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you are trying to find doesn't exist");
  }

  return { budget, expenses };
}

// action
// action
export async function budgetAction({ request }) {
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

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

export const BudgetPage = () => {
  const { budget, expenses } = useLoaderData();
  return (
    <div className="grid-lg" style={{ "--accent": budget.color }}>
      <h1 className="h2">
        <span className="accent">{budget.name}</span> Overview
      </h1>
      <div className="flex-lg">
        <BudgetItem budget={budget} showDelete />
        <AddExpenseForm budgets={[budget]} />
      </div>
      {expenses && expenses.length > 0 && (
        <div className="grid-md">
          <h2>
            <span className="accent">{budget.name}</span> Expenses
          </h2>
          <Table expenses={expenses} showBudget={false} />
        </div>
      )}
    </div>
  );
};
