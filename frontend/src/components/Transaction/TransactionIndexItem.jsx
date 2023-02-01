import React, { useState } from "react"
import accounting from "accounting";

const TransactionIndexItem = ({ transaction, index, onClick }) => {
  const [rowClass, setRowClass] = useState("");
  const [categoryClass, setCategoryClass] = useState("category");
  const date = Date.formatDate(transaction.date);

  if (index % 2 !== 0) {
    setRowClass("transaction-row-odd");
  }

  if (transaction.category === "UNCATEGORIZED") {
    setCategoryClass("category uncategorized");
  }

  return (
    <tr className={rowClass} onClick={onClick}>
      <td className='date'>{date}</td>
      <td className='description'>{transaction.description}</td>
      <td className={categoryClass}>{transaction.category}</td>
      <td className='amount'>{accounting.formatMoney(transaction.amount)}</td>
    </tr>
  );
};

export default TransactionIndexItem;