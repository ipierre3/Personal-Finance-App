import React, { useState } from 'react';
import axios from "axios";
import useAuth from '../../hooks/useAuth'
import { useNavigate } from 'react-router-dom';
import useCustomForm from '../../hooks/useCustomForm'
import { useEffect } from 'react';

let initialValues = {
  name: "",
  institution_id: "",
  balance: 0,
  account_type: "",
}

const AddAccountPage = (props) =>{  
  const [account, setAccount] = useState([]);
  const [institutions, setInstitutions] = useState([]);
  const [accountTypes, setAccountTypes] = useState(['Checking', 'Savings', 'Credit Cards', 'Loans', 'Investment']);
  const [user, token] = useAuth();
    
    const navigate = useNavigate()
    const [formData, handleInputChange, handleSubmit] = useCustomForm(initialValues, addNewAccount)
    
//api call to get all institutions, save them in setInstitutions -> useEffect
useEffect(()=>{
  const getInstitutions = async() =>{
    try{
      let response = await axios.get("http://127.0.0.1:8000/api/institution/")
      setInstitutions(response.data)
    } catch (error) {
      console.log(error)
    }
  }
  getInstitutions();
}, [setInstitutions])

    async function addNewAccount() {
      try{
        let response = await axios.post("http://127.0.0.1:8000/api/account/", formData, {
          headers: {
            Authorization: 'Bearer ' + token
          }
        })
        navigate("/")
        setAccount(response.data);
      } catch (error) {
          console.log(error)
      }
    }

  return (
    <div className='container'>
      <form className='form' onSubmit={handleSubmit}>
        <label>
          Name: {" "}
          <input 
          type="text"
          name="account"
          value={formData.name}
          onChange={handleInputChange}
        />
        </label>
        <label>
          Institution: {" "}
          <select 
          name="institution_id"
          value={formData.institution.id}
          onChange={handleInputChange}
        >
          {institutions.map((instituion) => <option value={instituion.id}>{instituion.name}</option>)}
        </select>
        </label>
        <label>
          Balance:
          <input 
          type="text"
          name="balance"
          value={formData.balance}
          onChange={handleInputChange}
        />
        </label>
        <label>
          account_type: {" "}
          <input 
          type="text"
          name="account_type"
          value={formData.account_type}
          onChange={handleInputChange}
        />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddAccountPage;