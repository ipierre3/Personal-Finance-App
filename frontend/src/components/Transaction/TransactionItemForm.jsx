import React, { useState, useEffect } from "react";
import ClickOutside from "react-onclickoutside";
import DateUtil from "../../utils/DateUtil"
import ApiUtil from "../../utils/ApiUtil";
import accounting from "accounting";

const TransactionItemForm = ({ transaction }) => {
  const [showEditDetails, setShowEditDetails] = useState(false);
  const [description, setDescription] = useState(transaction.description);
  const [notes, setNotes] = useState(transaction.notes);
  const [category, setCategory] = useState(transaction.category);
  const [id, setId] = useState(transaction.id);
  const [date, setDate] = useState(transaction.date);
  const [amount, setAmount] = useState(transaction.amount);
  const [amountN, setAmountN] = useState(transaction.amount_n);
  const [accountId, setAccountId] = useState(transaction.account_id);
  const [accountType, setAccountType] = useState(transaction.account_type);

  useEffect(() => {
    setDescription(transaction.description);
    setNotes(transaction.notes);
    setCategory(transaction.category);
    setId(transaction.id);
    setDate(transaction.date);
    setAmount(transaction.amount);
    setAmountN(transaction.amount_n);
    setAccountId(transaction.account_id);
    setAccountType(transaction.account_type);
  }, [transaction]);

  const toggleEditDetails = () => setShowEditDetails(!showEditDetails);

  const handleCancel = (e) => {
    e.preventDefault();
    setShowEditDetails(false);
  };

  const updateTransaction = () => {
    let category;
    let description;

    if (category === "") {
      category = "UNCATEGORIZED";
    }

    if (description === "") {
      description = "Description cannot be blank";
    }

    const transaction = {
      id: id,
      description,
      category,
      notes: notes,
      date: date,
      amount: parseFloat(amountN),
      amount_n: parseFloat(amountN),
      account_id: accountId,
      account_type: accountType,
    };

    if (isUpdated(transaction)) {
      ApiUtil.updateTransaction(transaction);
    }
  };

  const handleClickOutside = () => {
    updateTransaction();
  };

  const isUpdated = ({ description, notes, category }) => {
    if (transaction.description !== description ||
      transaction.notes !== notes ||
      transaction.category !== category) {
      return true;
    } else {
      return false;
    }
  };

  const updateTransactionNotes = () => {
    updateTransaction();
    toggleEditDetails();
  };

  let editDetails = (
    <button className="edit-details" onClick={toggleEditDetails}>
      EDIT DETAILS
    </button>
  );

  if (showEditDetails) {
    editDetails = (
      <p className="edit-details-show group">
        <h7 className="edit-notes group">
          <a>Notes</a>
          <textarea
            type="text"
            className="edit-details-notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </h7>
        <a className="edit-detail-buttons group">
          <button className="edit-details-cancel" onClick={handleCancel}>
            CANCEL
          </button>
          <button
            className="edit-details-submit"
            onClick={updateTransactionNotes}
          >
            I'M DONE
          </button>
        </a>
      </p>
    );
  }

  return (
    <ClickOutside handleClickOutside={handleClickOutside}>
      <tr className="edit-form">
        <td className="date">{DateUtil.formatDate(date)}</td>
        <td className="description">
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          {editDetails}
        </td>
        <td className="category">
          <input 
          type="text" 
          value={category}
          onChange={(e) => setCategory(e.target.value)} 
          />
        </td>
        <td className="amount">
          {accounting.formatMoney(amount)}
        </td>
      </tr>
    </ClickOutside>
  );
}

export default TransactionItemForm;