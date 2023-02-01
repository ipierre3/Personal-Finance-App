// General Imports
import React from 'react';
import { Routes, Route, Switch } from "react-router-dom";
import "./Stylesheets/App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import TransactionIndex from './components/Transaction/TransactionIndex';
import AccountShow from './components/Account/AccountShow';
import AccountIndex from './components/Account/AccountIndex';

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {

  return (
    <div>
      <Routes>
        <Switch>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/" element={<HomePage />}/>
          <Route path="/accounts" element={() => PrivateRoute(<AccountIndex />)} />
          <Route path="/type/:type" element={() => PrivateRoute(<AccountIndex />)} />
          <Route path="/accounts/:accountId" element={() => PrivateRoute(<AccountShow />)} />
          <Route path="/transactions" element={() => PrivateRoute(<TransactionIndex />)} />
        </Switch>
      </Routes>
    </div>
  );
}

export default App;

// <PrivateRoute>
//   <HomePage />
// </PrivateRoute>
