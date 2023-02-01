import React, { useState, useContext, useNavigate } from "react";
import ModalIndex from "../Modals/ModalIndex";
import AuthContext from "../../context/AuthContext";

const Header = (props) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [logoutUser, user] = useContext(AuthContext);
  const [modalVisible, setModalVisible] = useState(false);
  
  const navigate = useNavigate();
    if (user) {
      if (user.displayName.indexOf(" ") > 0) {
        setCurrentUser(
          "Hi " + user.displayName.substring(0, user.displayName.indexOf(" "))
        );
      } else setCurrentUser("Hi " + user.displayName);
    }

  let overviewClass = "overview";
  let transactionClass = "transaction";
  let modal = <div></div>

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function handleOverviewClick() {
    props.overviewClick();
  }

  function handleTransactionsClick() {
    props.transactionsClick();
  }

  if (props.overviewClicked) {
    overviewClass = "content-header-list-selected";
  } else {
    transactionClass = "content-header-list-selected";
  }

  if (modalVisible) {
    modal = <ModalIndex location="user" toggleModal={toggleModal} />;
  }

  return (
    <div>
      {modal}
      <header className="root-header">
        <nav className="root-header-nav group">
          <ul className="root-header-list group">
            <li>
              <p onClick={toggleModal}>
              Welcome {user.first_name}!
              </p>
            </li>
            <li>
              <p onClick={toggleModal}>Accounts</p>
            </li>
            <li>
              {user ? (
                <button onClick={logoutUser}>Logout</button>
              ) : (
                <button onClick={() => navigate("/login")}>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      
      <header className="content-header">
        <nav className="content-header-nav group">
          <ul className="content-header-list group">
            <li className={overviewClass}>
              <button onClick={handleOverviewClick}>
                Overview
              </button>
            </li>
            <li className={transactionClass}>
              <button onClick={() => handleTransactionsClick()}>
                Transactions
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;