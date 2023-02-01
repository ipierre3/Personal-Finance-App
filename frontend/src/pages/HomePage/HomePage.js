import React, { useEffect, useState } from "react";
import checkForCurrentUser from "../../context/AuthContext";
import Header from "../../components/Header/Header";

const HomePage = (props) => {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkForCurrentUser().then(user => {
      setUser(user)
      setIsLoading(false);
    })
  }, []);

  if (isLoading) {
    return <p>PLEASE WAIT</p>;
  }

  return (
    <div>
      <Header user={user} />
      {props.children}
    </div>
  );
};

export default HomePage;


//   return (
//     <div>
//       <Header user = {user} />
//       <Sidebar />
//         <div>
//           <h1>Top 5 Transactions</h1>
//           <PieChart />
//         </div>
//         <div className="container">
//           <h1>Welcome {user.first_name}!</h1>
//           <Link to="AddTransaction">Add</Link>
//           {transaction && transaction.map((transaction) => (
//             <p key={transaction.id}>
//               {transaction.account} {transaction.amount} {transaction.description}  {transaction.note}  {transaction.date} {transaction.recurring}
//               </p>
//             ))}
//         </div>
//     </div>
//   );
// };



{/* <Search filterTransactions={filterTransactions} /> */}
// useEffect(() => {
//   const fetchTransaction = async () => {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/api/transaction/", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       setTransaction(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
  
//   fetchTransaction();
// }, [token]);


// const [transaction, setTransaction] = useState([]);
// const filterTransactions = (searchQuery) => {
//   let filteredTransactions = transaction.filter((transaction) => {
//     return (
//       transaction.account.includes(searchQuery)
//       || transaction.amount.includes(searchQuery)
//       || transaction.description.includes(searchQuery)
//       || transaction.note.includes(searchQuery)
//       || transaction.date.includes(searchQuery)
//       || transaction.category.includes(searchQuery)
//     )
//   });
//   setTransaction(filteredTransactions);
  // accepts the search query as a param
  // calls fetchTransaction with the filtered request
// }