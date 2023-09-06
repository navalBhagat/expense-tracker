// react imports
import React, { useEffect, useRef } from "react";

// rrd imports
import { useFetcher } from "react-router-dom";

// components
import { BudgetName } from "./BudgetName";
import { BudgetAmount } from "./BudgetAmount";
import { CreateBudgetButton } from "./CreateBudgetButton";

export const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === "submitting";

  const formRef = useRef(null);
  const focusRef = useRef(null);

  useEffect(() => {
    if (!isSubmitting) {
      // @ts-ignore
      formRef.current.reset();

      // @ts-ignore
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  return (
    <div className="form-wrapper">
      <h2 className="h3">Create Budget</h2>
      <fetcher.Form method="post" className="grid-sm" ref={formRef}>
        <input type="hidden" name="_action" value="createBudget" />
        <BudgetName focusRef={focusRef} />
        <BudgetAmount />
        <CreateBudgetButton isSubmitting={isSubmitting} />
      </fetcher.Form>
    </div>
  );
};
