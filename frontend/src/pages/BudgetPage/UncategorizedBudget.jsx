import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "./../../context/BudgetsContext";
import Budget from "./Budget";
import React from 'react';

const UncategorizedBudget = (props) => {
  const { getBudgetExpenses } = useBudgets()
  const amount = getBudgetExpenses(UNCATEGORIZED_BUDGET_ID).reduce(
    (total, expense) => total + expense.amount,
    0
  )
  if (amount === 0) 
    return null

  return <Budget amount={amount} name="Uncategorized" gray {...props} />
}
export default UncategorizedBudget;
