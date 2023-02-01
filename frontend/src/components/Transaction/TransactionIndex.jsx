// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import TransactionIndexItem from "./TransactionIndexItem"
// import TransactionItemForm from "./TransactionItemForm"
// import ApiUtil from "../../utils/ApiUtil";
// import Search from "../Search/Search"

// const TransactionIndex = ({filterAccountType}) => {
//   const [transactions, setTransactions] = useState([]);
//   const [formIndex, setFormIndex] = useState(0);
//   const [inSearch, setInSearch] = useState(false);
//   const [totalCount, setTotalCount] = useState(0);
//   const [query, setQuery] = useState(null);
//   const [page, setPage] = useState(1);
//   const [sortDate, setSortDate] = useState(false);
//   const [sortDateASC, setSortDateASC] = useState(false);
//   const [sortCat, setSortCat] = useState(false);
//   const [sortCatASC, setSortCatASC] = useState(false);
//   const [sortAmount, setSortAmount] = useState(false);
//   const [sortAmountASC, setSortAmountASC] = useState(false);
//   const [sortDesc, setSortDesc] = useState(false);
//   const [sortDescASC, setSortDescASC] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     ApiUtil.GetTransactions();
//   }, []);

//   useEffect(() => {
//     setTotalCount(transactions.length);
//   }, [transactions]);

//   const handleNextPage = () => {
//     setPage(page + 1);
//   };

//   const handleBackPage = () => {
//     setPage(page - 1);
//   };

//   const handleSearch = (transactions, query, totalCount) => {
//     if (query !== "") {
//       setTransactions(transactions);
//       setQuery(query);
//       setInSearch(true);
//       setTotalCount(totalCount);
//       setPage(1);
//     } else {
//       setTransactions([]);
//       setInSearch(false);
//       setPage(1);
//       setTotalCount(0);
//     }
//   };

//   const handleFormIndex = index => {
//     setFormIndex(index);
//   };

//   let currentTransactions = transactions;

//   if (sortDate) {
//     currentTransactions = sortDate();
//   } else if (sortCat) {
//     currentTransactions = sortCat();
//   } else if (sortDesc) {
//     currentTransactions = sortDesc();
//   } else if (sortAmount) {
//     currentTransactions = sortAmount();
//   }

//   if (filterAccountType) {
//     currentTransactions = filterTransactionsByType();
//     setTotalCount(currentTransactions.length);
//     }
    
//     const firstResult = (page - 1) * 25;
//     let lastResult = transactions.length > firstResult + 25 ? firstResult + 25 : transactions.length;
//     currentTransactions = transactions.slice(firstResult, lastResult);
    
//   const mappedBody = mapBody(currentTransactions);
//   const resultText = resultText(
//     currentTransactions,
//     firstResult,
//     totalCount,
//     lastResult
//   );

//   const toggleSortState = ({ target }) => {
//     const column = target.className;

//     if (column === "date") {
//       setSortDate(true);
//       setSortDateASC(!sortDateASC);
//       setSortCat(false);
//       setSortDesc(false);
//       setSortAmount(false);
//     } else if (column === "description") {
//       setSortDate(false);
//       setSortCat(false);
//       setSortDesc(true);
//       setSortDescASC(!sortDescASC);
//       setSortAmount(false);
//     } else if (column === "category") {
//       setSortDate(false);
//       setSortCat(true);
//       setSortCatASC(!sortCatASC);
//       setSortDesc(false);
//       setSortAmount(false);
//     } else if (column === "amount") {
//       setSortDate(false);
//       setSortCat(false);
//       setSortDesc(false);
//       setSortAmount(true);
//       setSortAmountASC(!sortAmountASC);
//     }
//   }

//   sortDesc = () => {
//     if (sortDescASC) {
//       return transactions.sort(({description: desc1}, {description: desc2}) =>
//         desc1.toLowerCase().localeCompare(desc2.toLowerCase())
//       );
//     } else {
//       return transactions.sort(({description: desc1}, {description: desc2}) =>
//         desc2.toLowerCase().localeCompare(desc1.toLowerCase())
//       );
//     }
//   }
    
//   return (
//     <div className='group'>
//       <Search search={handleSearch} />
//       {resultText}
//       <table className='transaction-table'>
//         <thead className='transaction-table-header'>
//           <tr>
//             <th onClick={toggleSortState} className='date'>
//               Date
//             </th>
//             <th onClick={toggleSortState} className='description'>
//               Description
//             </th>
//             <th onClick={toggleSortState} className='category'>
//               Category
//             </th>
//             <th onClick={toggleSortState} className='amount'>
//               Amount
//             </th>
//           </tr>
//         </thead>
//         <tbody className='transaction-table-body'>{mappedBody}</tbody>
//       </table>
//     </div>
//   );
// }

// export default TransactionIndex;