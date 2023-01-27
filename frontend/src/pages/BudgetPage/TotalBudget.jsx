import { useBudgets } from "./../../context/BudgetsContext";
import Budget from "./Budget";
import React from 'react';


const TotalBudget = () => {
  const { expenses, budgets } = useBudgets()
  const amount = expenses.reduce((total, expense) => total + expense.amount, 0)
  const max = budgets.reduce((total, budget) => total + budget.max, 0)
  if (max === 0) return null

  return <Budget amount={amount} name="Total" gray max={max} hideButtons />
}
export default TotalBudget;