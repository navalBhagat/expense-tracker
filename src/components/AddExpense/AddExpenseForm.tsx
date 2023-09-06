// react imports
import React, { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// types
import { Budget } from "../../types";

// components
import { ExpenseName } from "./ExpenseName";
import { AddExpenseTitle } from "./AddExpenseTitle";
import { ExpenseAmount } from "./ExpenseAmount";
import { BudgetCategory } from "./BudgetCategory";
import { AddExpenseButton } from "./AddExpenseButton";

type AddExpenseFormProps = {
  budgets: Budget[];
};

export const AddExpenseForm: React.FC<AddExpenseFormProps> = ({ budgets }) => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";
  const formRef = useRef(null);
  const focusRef = useRef(null);

  useEffect(() => {
    if (!isSubmitting) {
      // @ts-ignore
      formRef.current.reset();

      // @ts-ignore
      focusRef.current?.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <AddExpenseTitle budgets={budgets} />
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <input type="hidden" name="_action" value="createExpense" />
        <div className="expense-inputs">
          <ExpenseName focusRef={focusRef} />
          <ExpenseAmount />
        </div>
        <BudgetCategory budgets={budgets} />
        <AddExpenseButton isSubmitting={isSubmitting} />
      </fetcher.Form>
    </div>
  );
};
