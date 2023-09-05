export type Budget = {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  color: string;
};

export type Expense = {
  id: string;
  name: string;
  createdAt: any;
  amount: number;
  budgetId: string;
};
