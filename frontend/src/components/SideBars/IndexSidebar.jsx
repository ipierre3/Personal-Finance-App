import React, { useState } from "react";
import AccountTypeIndex from "../account_type_index";
// import ModalIndex from "../modals/modal_index";

const IndexSidebar = (props) => {
  const [expanded, setExpanded] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const toggleExpand = (type) => {
    setExpanded({...expanded, [type]: !expanded[type]})
  };

  // const totalAccountTypeBalance = (accountType) => {
  //   let sum = 0;
  //   props.accounts[accountType].forEach(({balance_n}) => {
  //     sum += parseFloat(balance_n);
  //   });

  //   return sum;
  // };


  // let modal = <div></div>;

  // if (modalVisible) {
  //   modal = (
  //     <ModalIndex location='accountIndex' toggleModal={toggleModal} />
  //   );
  // }

//   return (
//     <section className='root-content-sidebar'>
//       {modal}
//       <header className='group'>
//         <h1>Accounts</h1>
//         <i onClick={toggleModal} className='fa fa-pencil'></i>
//       </header>
//       {mappedAccountTypes}
//     </section>
//   );

//   const getMappedAccountTypes = (accountTypes, accountBalances, accounts) => {
//     const mappedAccountTypes = accountTypes.map((type) => {
//       const typeIcon = getTypeIcon(type);
//       const balanceClass = getAccountBalanceClass(accountBalances[type]);
//       let expandedAccounts;
//       if (expanded[type] === undefined || expanded[type]) {
//         expandedAccounts = (
//           <AccountTypeIndex
//             accountClick={props.accountClick}
//             transactionsClick={props.transactionsClick}
//             accounts={accounts[type]}
//           />
//         )
//       }
//     });
//   }

//   return (
//     <div key={type} className='account-balance-headers group'>
//       <div
//         onClick={() => toggleExpand(type)}
//         className='type-background group'
//       >
//         <h3>
//           {typeIcon}
//           {type}
//         </h3>
//         <h4 className={balanceClass}>
//           {" "}
//           {accounting.formatMoney(accountBalances[type])}
//         </h4>
//       </div>
//       {expandedAccounts}
//     </div>
//   );


//   function getTypeIcon(type) {
//     if (type === "Cash") {
//       return <i className='fa fa-money'></i>;
//     } else if (type === "Credit Cards") {
//       return <i className='fa fa-credit-card-alt'></i>;
//     } else if (type === "Loan") {
//       return <i className='fa fa-home'></i>;
//     } else {
//       return <i className='fa fa-line-chart'></i>;
//     }
//   }
// };

export default IndexSidebar;