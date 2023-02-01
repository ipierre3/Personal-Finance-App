import React, {useState } from "react";
import {useNavigate} from "react-router-dom";
import ModalIndex from "../Modals/ModalIndex";

const Sidebar = (props) => {
  const [typeClicked, setTypeClicked] = useState(false);
  const [accountId, setAccountId] = useState(props.accountId || null);
  const [allAccounts, setAllAccounts] = useState(props.showAllAccounts || null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const accounts = props.accounts;

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const handleAccountTypeClick = (type) => {
    setTypeClicked(type);
    setAccountId(null);
    setAllAccounts(null);
    props.accountTypeClick(type);
  };

  const handleAllAccountsClick = () => {
    if (props.allAccountsClick) {
      props.allAccountsClick();
    } else {
       navigate("/");
    }
  };

  const handleAccountClick = ({id}) => {
    setTypeClicked(false);
    setAllAccounts(null);
    setAccountId(id);
    props.accountClick();
    navigate(`/account/${id}`);
  };

  const getAccountTypes = (accounts) => {
    return Object.keys(accounts).filter(accountType => accounts[accountType].length > 0);
  };

  const getAccountsArr = (accounts) => {
    return Object.keys(accounts).reduce((accountsArr, accountType) => {
      if (accounts[accountType].length > 0) {
        accountsArr.push(...accounts[accountType]);
      }
    
      return accountsArr;
      }, []);
  }

  const accountTypes = getAccountTypes(accounts);
  const accountsArr = getAccountsArr(accounts);
  let allAccountsClass = "account-types-show-type";
  const mappedAccountTypes = getMappedAccountTypes(accountTypes);
  const transactionMappedAccounts = getTransactionMappedAccounts(accountsArr);
  let modal = <div></div>;

  if (modalVisible) {
    modal = (
      <ModalIndex location='accountShow' toggleModal={toggleModal} />
    );
  }

  if (allAccounts) {
    allAccountsClass = "account-types-show-type selected-account";
  }

  return (
    <section className='root-content-sidebar-show'>
      {modal}
      <h1>Type</h1>
      {mappedAccountTypes}
      <header className='group'>
        <h1>Accounts</h1>
          <i
            onClick={toggleModal}
            id='show-pencil'
            className='fa fa-pencil'
          ></i>
      </header>
      <h3 onClick={handleAllAccountsClick} className={allAccountsClass}>
        All Accounts
      </h3>

      {transactionMappedAccounts}
    </section>
  );

  function getMappedAccountTypes(accountTypes) {
    const mappedAccountTypes = accountTypes.map((type) => {
      let accountClass = "account-types-show-type";
      if (type === typeClicked) {
        accountClass = "account-types-show-type selected-account";
      }
      return (
        <h3 
          onClick={handleAccountTypeClick(type)}
          key={type}
          className={accountClass}
        >
          {type}
        </h3>
      );
    });

    return mappedAccountTypes;
  }

  function getTransactionMappedAccounts(accountsArray) {
    const transactionMappedAccounts = accountsArray.map((account, index) => {
      let accountClass = "account-types-show-type";
      const acctId = parseInt(accountId);

      if (
        account.id === acctId || account.account_type === typeClicked
      ) {
        accountClass = "account-types-show-type selected-account";
      }
      return (
        <a key={index} href={`#/accounts/${account.id}`}>
          <h3
            onClick={handleAccountClick(account)}
            className={accountClass}
          >
            {account.name}
          </h3>
        </a>
      );
    });

    return transactionMappedAccounts;
  }
};

export default Sidebar;