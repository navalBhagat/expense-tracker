export async function deleteExpenseById(expenseId: string) {
  // Define the request options
  const requestOptions = {
    method: "DELETE",
  };

  await fetch(
    "https://expense-tracker-backend-4fsugardwq-ew.a.run.app/expense?expenseId=" + expenseId,
    requestOptions
  );
}
