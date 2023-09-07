export interface Budget {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  color: string;
}

export interface Expense {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  budgetId: string;
}

export interface User {
  id: string;
  userName: string;
  budgets: string[];
}
