export async function deleteBudgetAndExpenses(budgetId: string) {
  const requestOptions = {
    method: "DELETE",
  };

  fetch("https://expense-tracker-backend-4fsugardwq-ew.a.run.app/budget?budgetId=" + budgetId, requestOptions);
}
