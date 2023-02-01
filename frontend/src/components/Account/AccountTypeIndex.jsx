import React from "react";
import { useNavigate } from "react-router-dom";
import accounting from "accounting";

const AccountTypeIndex = ({ accounts, accountClick, transactionsClick }) => {
  const navigate = useNavigate();

  const showAccount = ({ id }) => {
    accountClick();
    transactionsClick();
    navigate(`/account/${id}`);
  };

  const totalAccountTypeBalance = (account_type) => {
    let sum = 0;
    accounts[account_type].forEach(({ balance_n }) => {
      sum += parseFloat(balance_n);
    });
    return sum;
  };

  const sliceAccountName = (accountName) => {
    return accountName.length > 18 ? `${accountName.slice(0, 18)}...` : accountName;
  };

  const mappedAccounts = accounts.map((account, index) => (
    <li className="account-type-account group" key={index}>
      <p1 onClick={() => showAccount(account)}>
        {sliceAccountName(account.name)}
      </p1>
      <p2>{accounting.formatMoney(account.balance_n)}</p2>
    </li>
  ));

  return <div className="accounts">{mappedAccounts}</div>;
};

export default AccountTypeIndex;