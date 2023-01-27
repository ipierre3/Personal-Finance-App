// import { useState, useCallback } from 'react';
// import { useHistory } from 'react-router-dom';
// import AccountTypeIndex from "../account_type_index";
// import ComponentActions from "../../actions/component_actions";
// import ModalIndex from "../modals/modal_index";

// const Sidebar = (props) => {
//   const history = useHistory();
//   const [typeClicked, setTypeClicked] = useState(false);
//   const [accountTypes, setAccountTypes] = useState([]);
//   const [accountId, setAccountId] = useState(props.accountId || null);
//   const [allAccounts, setAllAccounts] = useState(props.showAllAccounts || null);
//   const [modalVisible, setModalVisible] = useState(false);

//   useEffect(() => {
//     setAccountTypes(Object.keys(accounts).filter(accountType => accounts[accountType].length > 0));
//     }, [accounts]);
    
//     return accountTypes;
//     }

//   const toggleModal = useCallback(() => {
//     setModalVisible(!modalVisible);
//   }, [modalVisible]);

//   const handleAccountTypeClick = useCallback((type) => {
//     setTypeClicked(type);
//     setAccountId(null);
//     setAllAccounts(null);
//     props.accountTypeClick(type);
//   }, []);

//   const handleAllAccountsClick = useCallback(() => {
//     if (props.allAccountsClick) {
//       props.allAccountsClick();
//     } else {
//       history.push('/');
//     }
//   }, [props.allAccountsClick, history]);

//   const handleAccountClick = useCallback((id) => {
//     setTypeClicked(false);
//     setAllAccounts(null);
//     setAccountId(id);
//     props.accountClick();
//     history.push(`accounts/${id}`);
//   }, [history]);

//   const accounts = props.accounts;
//   const accountTypes = setAccountTypes(accounts);
//   const accountsArr = ComponentActions.getAccountsArr(accounts);
//   let allAccountsClass = "account-types-show-type";
//   const mappedAccountTypes = getMappedAccountTypes(accountTypes);
//   const transactionMappedAccounts = getTransactionMappedAccounts(accountsArr);
//   let modal = <div></div>;

//   if (modalVisible) {
//     modal = (
//       <ModalIndex location='accountShow' toggleModal={toggleModal} />
//     );
//   }

//   if (allAccounts) {
//     allAccountsClass = "account-types-show-type selected-account";
//   }

//     return (
//       <section className='root-content-sidebar-show'>
//         {modal}
//         <h1>Type</h1>
//         {mappedAccountTypes}
//         <header className='group'>
//           <h1>Accounts</h1>
//           <i
//             onClick={toggleModal}
//             id='show-pencil'
//             className='fa fa-pencil'
//           ></i>
//         </header>
//         <h3 onClick={handleAllAccountsClick} className={allAccountsClass}>
//           All Accounts
//         </h3>

//         {transactionMappedAccounts}
//       </section>
//     );
//   },

//   getMappedAccountTypes(accountTypes) {
//     const mappedAccountTypes = accountTypes.map((type) => {
//       let accountClass = "account-types-show-type";
//       if (type === typeClicked) {
//         accountClass = "account-types-show-type selected-account";
//       }
//       return (
//         <h3
//           onClick={handleAccountTypeClick(null, type)}
//           key={type}
//           className={accountClass}
//         >
//           {type}
//         </h3>
//       );
//     });

//     return mappedAccountTypes;
//   },

//   getTransactionMappedAccounts(accountsArray) {
//     const transactionMappedAccounts = accountsArray.map((account, index) => {
//       let accountClass = "account-types-show-type";
//       const accountId = parseInt(that.state.accountId);

//       if (
//         account.id === accountId || account.account_type === that.state.typeClicked
//       ) {
//         accountClass = "account-types-show-type selected-account";
//       }
//       return (
//         <a key={index} href={`#/accounts/${account.id}`}>
//           <h3
//             onClick={handleAccountClick(null, account)}
//             className={accountClass}
//           >
//             {account.name}
//           </h3>
//         </a>
//       );
//     });

//     return transactionMappedAccounts;
//   }
// };

// export default Sidebar;