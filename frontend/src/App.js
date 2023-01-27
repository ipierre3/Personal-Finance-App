// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";


// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import TransactionForm from "./components/TransactionForm/TransactionForm";
import AddAccountPage from "./pages/AddAccountPage/AddAccountPage";
import BudgetPage from "./pages/BudgetPage/BudgetPage";


// Component Imports
// import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer"; #WONT NEED TO BE IN APP
// import SideBar from "./components/SideBar/SideBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
// import AddBudget from "./components/Budget/Budget";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        
        <Route path="/addTransaction" element={<TransactionForm />} />
        <Route path="/addAccount" element={<AddAccountPage />} />
      </Routes>
    </div>
  );
}

export default App;
