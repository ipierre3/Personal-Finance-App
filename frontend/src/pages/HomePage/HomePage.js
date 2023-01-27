import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from 'react-router-dom';
import PieChart from './../../components/Chart/PieChart';
import Search from './../../components/Search/Search';
import axios from "axios";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/SideBar/SideBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/transaction/", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setTransaction(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    
    fetchTransaction();
  }, [token]);

  const filterTransactions = (searchQuery) => {
    let filteredTransactions = transaction.filter((transaction) => {
      return (
        transaction.account.includes(searchQuery)
        || transaction.amount.includes(searchQuery)
        || transaction.description.includes(searchQuery)
        || transaction.note.includes(searchQuery)
        || transaction.date.includes(searchQuery)
        || transaction.category.includes(searchQuery)
      )
    });
    setTransaction(filteredTransactions);
    // accepts the search query as a param
    // calls fetchTransaction with the filtered request
  }
  return (
    <div>
      <Header user = {user} />
      <Sidebar />
        <div>
          <h1>Top 5 Transactions</h1>
          <PieChart />
        </div>
        <div className="container">
          <h1>Welcome {user.first_name}!</h1>
          <Link to="AddTransaction">Add</Link>
          {transaction && transaction.map((transaction) => (
              <p key={transaction.id}>
                {transaction.account} {transaction.amount} {transaction.description}  {transaction.note}  {transaction.date} {transaction.recurring}
              </p>
            ))}
        </div>
    </div>
  );
};

export default HomePage;

{/* <Search filterTransactions={filterTransactions} /> */}