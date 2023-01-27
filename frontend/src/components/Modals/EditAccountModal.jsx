import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import accounting from 'accounting';
import axios from 'axios';
import ApiUtil from "../../utils/ApiUtil";
import AccountModal from "./AccountModal"

const EditAccountModal = (props) => {

  const [accounts, setAccounts] = useState([]);
  const [account, setAccount] = useState(null);
  const [addAccountVisible, setAddAccountVisible] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/account/');
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAccounts();
  }, []);

  const selectAccount = (acct) => {
    if (account === acct) {
    setAccount(null);
  } else {
    setAccount(acct);
  }
  };

  const AddAccountModal = () => {
    setAddAccountVisible(!addAccountVisible);
  };

  const closeModal = () => {
    props.toggleModal();
  };

  const destroyAccount = (account) => {
    ApiUtil.deleteAccount(account, () => {
    history.push("/");
    });
  };

  const getAccountsArr = (accounts) => {
    return Object.keys(accounts).reduce((accountsArr, accountType) => {
      if (accounts[accountType].length > 0) {
        accountsArr.push(...accounts[accountType]);
      }
    
      return accountsArr;
      }, []);
    }

  if (addAccountVisible) {
    return (
      <AccountModal goBack={AddAccountModal} toggleModal={closeModal} />
    );
  }

  const accts = getAccountsArr(accounts);
  let accountsList;

  if (accts.length === 0) {
    accountsList = (
      <div>
        Looks like you haven't linked to any accounts yet. Get started by
        clicking the Add Account button above.
      </div>
    );
  } else {
    accountsList = accts.map((account, index) => {
      if (account.id === account.id) {
        return (
          <li
            className='group'
            onClick={() => selectAccount(account)}
            key={index}
          >
            <h1 className='edit-account-header'>{account.name}</h1>
            <p className='edit-account-details'>
              <strong>Institution:</strong> {account.institution}
            </p>
            <p className='edit-account-details'>
              <strong>Account Type</strong>: {account.account_type}
            </p>
            <p className='edit-account-details'>
              <strong>Balance</strong>: {accounting.formatMoney(account.balance)}
            </p>
            <button
              className='edit-account-delete'
              onClick={() => destroyAccount(account)}
            >
              Delete Account
            </button>
          </li>
        );
      } else {
        return (
          <li
            className='group'
            onClick={() => selectAccount(account)}
            key={index}
          >
            <p>{account.name}</p>
          </li>
        );
      }
    });
  }

  return (
    <div className='modal-edit-form'>
      <h1 className='main-header-account'>
        <button
          className='add-new-account-button'
          onClick={AddAccountModal}>
          + Add Account
        </button>
      </h1>
      <ul className='edit-account-list'>{accountsList}</ul>
    </div>
  );
};

export default EditAccountModal;