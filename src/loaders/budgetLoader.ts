// helpers
import { getAllMatchingItems } from "../helpers";

export async function budgetLoader({ params }: any) {
  const budget = await getAllMatchingItems({
    category: "budgets",
    key: "id",
    value: params.id,
  })[0];

  const expenses = await getAllMatchingItems({
    category: "expenses",
    key: "budgetId",
    value: params.id,
  });

  if (!budget) {
    throw new Error("The budget you are trying to find doesn't exist");
  }

  return { budget, expenses };
}
