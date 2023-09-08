export async function deleteBudgetAndExpenses(budgetId: string) {
  const requestOptions = {
    method: "DELETE",
  };

  fetch("http://localhost:8080/budget?budgetId=" + budgetId, requestOptions);
}
