export type Budget = {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  color: string;
};

export interface Expense {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  budgetId: string;
}

// Backend-compatible

export interface User {
  id: string;
  userName: string;
  budgets: string[];
}

// TODO: remove backend part later
export interface BudgetBackend {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
}
