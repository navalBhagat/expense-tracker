// ts imports
import { DateTimeFormatOptions } from "intl";

// types
import { Budget, BudgetBackend, Expense } from "./types";

// api calls
import { createBudgetForUser } from "./actions/api/createBudgetForUser";

// colors
const generateRandomColor = (budgetLength?: number) => {
  const existingBudgetLength = budgetLength ?? 0;
  return `${existingBudgetLength * 34} 65% 50%`;
};

export const setColors = (budgets: BudgetBackend[]): Budget[] => {
  const budgetsWithColors: Budget[] = [];

  budgets.forEach((budget, index) => {
    budgetsWithColors.push({ ...budget, color: generateRandomColor(index) });
  });

  return budgetsWithColors;
};

// Local storage functions
export const fetchData = (key: string): any[] => {
  return JSON.parse(localStorage.getItem(key)!);
};

// Get all items from local storage
type getAllMatchingItemsProps = {
  category: string;
  key: string;
  value: string;
};
export const getAllMatchingItems = ({
  category,
  key,
  value,
}: getAllMatchingItemsProps) => {
  const data = fetchData(category) ?? [];
  return data.filter((item) => item[key] === value);
};

// Delete item from local storage
type DeleteItemProps = {
  key: string;
  id?: string;
};
export const deleteItem = ({ key, id }: DeleteItemProps) => {
  const existingData = fetchData(key);
  if (id) {
    const newData = existingData.filter((item) => item.id !== id);
    return localStorage.setItem(key, JSON.stringify(newData));
  }
  return localStorage.removeItem(key);
};

// Create budget
type CreateBudgetProps = {
  id: string;
  name: string;
  amount: number;
};
export const createBudget = ({ id, name, amount }: CreateBudgetProps) => {
  const existingBudgets = fetchData("budgets") ?? [];

  const newItem: Budget = {
    id: id,
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    color: generateRandomColor(existingBudgets.length),
  };

  localStorage.setItem(
    "budgets",
    JSON.stringify([...existingBudgets, newItem])
  );

  return newItem;
};

// Create expense
type CreateExpenseProps = {
  expenseId: string;
  name: string;
  amount: number;
  budgetId: string;
};
export const createExpense = ({
  expenseId,
  name,
  amount,
  budgetId,
}: CreateExpenseProps) => {
  const newItem: Expense = {
    id: expenseId,
    name: name,
    createdAt: Date.now(),
    amount: +amount,
    budgetId: budgetId,
  };

  const existingExpenses = fetchData("expenses") ?? [];
  localStorage.setItem(
    "expenses",
    JSON.stringify([...existingExpenses, newItem])
  );
  return newItem;
};

// Total spent by budget
export const calculateSpentByBudget = (budgetId: string) => {
  const expenses = fetchData("expenses") ?? [];
  const budgetSpent = expenses.reduce((acc, expense) => {
    // check if expense.id === budgetId
    if (expense.budgetId !== budgetId) return acc;

    // add current amount to the total
    return (acc += expense.amount);
  }, 0);

  return budgetSpent;
};

// FORMATTING

// format date
export const formatDateToLocalString = (epoch: string) => {
  const options: DateTimeFormatOptions = {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  };
  return new Date(epoch).toLocaleDateString(undefined, options);
};

// format percentages
export const formatPercentage = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// format currency
export const formatCurrency = (amount: number) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "EUR",
  });
};

// Backend-compatible
export const fetchUserFromStorage = () => {
  return fetchData("user");
};
