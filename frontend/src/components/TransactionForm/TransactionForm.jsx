import React, { useState } from 'react';
import axios from "axios";

import useAuth from '../../hooks/useAuth'

const TransactionForm = (props) =>{
  
  const [account, setAccount] = useState(0);
  const [amount, setAammount] = useState();
  const [description, setDescription] = useState('');
  const [note, setNote] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [recuring, setRecuring] = useState(false)
  const [user, token] = useAuth();
//event.target.checked for checkbox

  const handleSubmit = (event) => {
    event.preventDefault();
    let newEntry={
      account: account,
      amount: amount,
      description: description,
      note: note,
      date: date,
      category: category,
      recuring: recuring
    };
    console.log(newEntry)
  }
  
  const updateTransaction = (event) => {
    let category;
    let description;
      if (category === "") {
        category = "UNCATEGORIZED";
      }
      if (description === "") {
        description = "Description cannot be blank";
      }
  }

    return (
    <form onSubmit ={handleSubmit}>
  
    </form>
   );
}

export default TransactionForm;
