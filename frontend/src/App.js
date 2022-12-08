// General Imports
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
// import SideBar from "./components/SideBar/SideBar";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/" element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }/>
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

// {/* <Router>
// <Route path='login' element={<LoginPage />} />
// <Route path="/register" element={<RegisterPage />} />
//   <IndexRoute component={AccountIndex} />
//   <Route path='accounts' component={AccountIndex} />
//   <Route path='type/:type' component={AccountIndex} />
//   <Route path='accounts/:accountId' component={AccountShow} />
//   <Route path='transactions' component={TransactionIndex} />
// </Router>
// ); */}
