import React, { useState } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm'

let initialValues = {
  account: "",
  amount: 0,
  description: "",
  note: "",
  date: "",
  category: "UNCATEGORIZED",
  recurring: false
}

const TransactionForm = (props) =>{  
  const [transaction, setTransaction] = useState([]);
  const [user, token] = useAuth();
    
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, postNewTransaction)
    
    async function postNewTransaction() {
      try{
        let response = await axios.post("http://127.0.0.1:8000/api/transaction/", formData, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        navigate("/")
        setTransaction(response.data);
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Account: {" "}
          <input 
          type="text"
          name="account"
          value={formData.account}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Amount: {0}
          <input 
          type="text"
          name="amount"
          value={formData.amount}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Description: {" "}
          <input 
          type="text"
          name="description"
          value={formData.description}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Note: {" "}
          <input 
          type="text"
          name="note"
          value={formData.note}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Date: {" "}
          <input 
          type="text"
          name="date"
          value={formData.date}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Category: {"UNCATEGORIZED"}
          <input 
          type="text"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Recurring: {"UNCATEGORIZED"}
          <input 
          type="text"
          name="category"
          value={formData.recuring}
          onChange={handleInputChange}
        />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
export default TransactionForm;