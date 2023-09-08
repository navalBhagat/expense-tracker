export async function deleteExpenseById(expenseId: string) {
  // Define the request options
  const requestOptions = {
    method: "DELETE",
  };

  await fetch(
    "http://localhost:8080/expense?expenseId=" + expenseId,
    requestOptions
  );
}
