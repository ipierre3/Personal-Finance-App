import React from "react";
import formatDate from "../Date/Date";

function TransactionIndexItem({transaction, index}) {
  const handleClick = (props) => {
    props.onClick();
  };

  const {date} = formatDate(transaction.date);

  let rowClass = "";
  let categoryClass = "category";
    
  if (index % 2 !== 0) {
  rowClass = "transaction-row-odd";
  }
    
  if (transaction.category === "UNCATEGORIZED") {
  categoryClass = "category uncategorized";
  }

  return (
    <tr className={rowClass} onClick={handleClick}>
      <td className='date'>{date}</td>
      <td className='description'>{transaction.description}</td>
      <td className={categoryClass}>{transaction.category}</td>
      <td className='amount'>{accounting.formatMoney(transaction.amount)}</td>
    </tr>
  );
};

export default TransactionIndexItem;
