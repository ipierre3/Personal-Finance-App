// import React, { useState, useEffect } from 'react';
// import { useNavigate } from "react-router-dom";
// import TransactionIndex from "../Transaction/TransactionIndex";
// import IndexSidebar from "../SideBars/IndexSidebar";
// import Sidebar from "../SideBars/Sidebar"
// import ApiUtil from '../../utils/ApiUtil';
// import AccountShow from './AccountShow';
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// import PieChart from "../Chart/PieChart";
// import accounting from 'accounting';

// const AccountIndex = () => {
//   const [accounts, setAccounts] = useState([]);
//   const [expanded, setExpanded] = useState({});
//   const [overviewClicked, setOverviewClicked] = useState(true);
//   const [transactionsClicked, setTransactionsClicked] = useState(false);
//   const [accountClicked, setAccountClicked] = useState(false);
//   const [filterAccountType, setFilterAccountType] = useState(false);
//   const [typeIds, setTypeIds] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     ApiUtil.GetAccounts()
//     .then((data) => setAccounts(data));
//   }, []);

//   const handleOverviewClick = () => {
//     setOverviewClicked(true);
//     setTransactionsClicked(false);
//     setAccountClicked(false);
//   };

//   const handleAccountClick = () => {
//     setAccountClicked(true);
//   };

//   const handleAllAccountsClick = () => {
//     setOverviewClicked(true);
//     setTransactionsClicked(false);
//     setAccountClicked(false);
//   };

//   const handleTransactionsClick = () => {
//     setOverviewClicked(false);
//     setTransactionsClicked(true);
//   };

//   if (accounts.length === 0) {
//     return newUserWelcome();
//   } else if (accountClicked) {
//     return (
//       <div>
//         <Header />
//         <AccountShow />
//         <Footer />
//       </div>
//     );
//   } else if (transactionsClicked) {
//     return (
//       <div>
//         <Header />
//         <main className='root-content group'>
//           <Sidebar 
//             handleAccountTypeClick={handleAccountTypeClick}
//             showAllAccounts='true'
//             handleAllAccountsClick={handleAllAccountsClick}
//             accounts={accounts}
//             handleAccountClick={handleAccountClick}
//             handleTransactionsClick={handleTransactionsClick}
//           />
//           <section className='root-content-main'>
//             <h1>Transactions</h1>
//             <TransactionIndex
//               filterAccountType={filterAccountType}
//               typeIds={typeIds}
//             />
//           </section>
//         </main>
//         <Footer />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <Header />
//         <main className='root-content group'>
//           <IndexSidebar />
//           <section className='root-content-main'>
//             <Header className='root-content-main-Header'>
//               <PieChart />
//               <h1>All Transactions</h1>
//             </Header>
//             <TransactionIndex />
//           </section>
//         </main>
//         <Footer />
//       </div>
//     );
//   }
  
//   return (
//     <Header>
//       <h1 id='float-none'>All {filterAccountType} Accounts</h1>
//       <h6>TOTAL BALANCE</h6>
//       <h5 className={balanceClass}>
//         {accounting.formatMoney(typeBalance)}
//       </h5>
//     </Header>
//   );
// }
// };

// export default AccountIndex;
