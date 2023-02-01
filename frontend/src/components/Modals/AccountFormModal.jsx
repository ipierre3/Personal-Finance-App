import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiUtil from "../../utils/ApiUtil";

const AccountFormModal = (props) => {
  const [userID, setUserID] = useState("");
  const [accountPassword, setAccountPassword] = useState("");
  const [accountName, setAccountName] = useState("");
  const [checked, setChecked] = useState(false);
  const [flash, setFlash] = useState([]);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setChecked(!checked);
  };

  const handleSubmit = async () => {
    const instId = props.id;
    const account = {
      name: accountName,
      balance: generateBalance(),
      account_type: generateAccountType(),
      institution_id: instId,
    };

    ApiUtil.createAccount(account, navToNewAccount);
  };

  const navToNewAccount = (id) => {
    props.toggleModal();
    navigate(`http://127.0.0.1:8000/api/account/${id}`);
    };

  const goBack = () => {
    props.goBack();
  };

  let passwordInputType = "password";
  let errors = "";

  if (checked) {
    passwordInputType = "text";
  }

  if (flash.length > 0) {
    errors = (
      <p className="session-form-errors">
        <i className="fa fa-exclamation-triangle" />
        {flash}
      </p>
    );
  }

  const institution = props.inst;

  const generateBalance = () => {
    return Math.floor(Math.random() * (25000 - 4000) + 4000);
  };

  const generateAccountType = () => {
    const types = ["Cash", "Credit Cards", "Loan", "Investments"];
    return types[Math.floor(Math.random() * types.length)];
  };

  return (
    <div className="modal-edit-form">
      <h1 className="main-header">{institution}</h1>
      <form className="modal-form group">
        {errors}
        <fieldset className="modal-form-fieldset">
          <div className="input">
            <label className="add-account-label">Account Name</label>
            <p className="add-account-label">
              Name your {institution} account
            </p>
            <input
              type="text"
              value={accountName}
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="add-account-label">User ID</label>
            <p className="add-account-label">
              for your {institution} account
            </p>
            <input
              type="text"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </div>

          <div className="input">
            <label className="add-account-label">Password</label>
            <p className="add-account-label">
              for your {institution} account
            </p>
            <input
              type={passwordInputType}
              value={accountPassword}
              onChange={(e) => setAccountPassword(e.target.value)}
            />
          </div>

          <div className='input show-pass group'>
            <input
              id='checkbox'
              onChange={toggleShowPassword}
              type='checkbox'
            />
            <p>Show password</p>
          </div>

          <div className='submit group'>
            <button className='add-account-submit'
              onClick={handleSubmit}>
              CONNECT SECURELY
            </button>
            <p onClick={goBack} className='go-back' to={"/"}>
              Go back
            </p>
          </div>
        </fieldset>
      </form>
    </div>
  );
};  

export default AccountFormModal;

// const [accountType, setAccountType] = useState("");