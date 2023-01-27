import { useState, useEffect } from 'react';
import axios from 'axios';

const ApiUtil = {
  GetAccounts() {
    const [accounts, setAccounts] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/account/')
      .then(res => setAccounts(res.data))
      .catch(err => console.log(err));
    }, []);

    return accounts;
  },

  GetAccount(id) {
    const [account, setAccount] = useState({});
    useEffect(() => {
      axios.get(`http://127.0.0.1:8000/api/account/${id}`)
      .then(res => setAccount(res.data))
      .catch(err => console.log(err));
    }, [id]);

    return account;
  },

  GetTransactions() {
    const [transactions, setTransactions] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/transaction/')
      .then(res => setTransactions(res.data))
      .catch(err => console.log(err));
    }, []);

    return transactions;
  },

  GetAccountTransactions(accountId) {
    const [accountTransactions, setAccountTransactions] = useState([]);
    useEffect(() => {
      axios.get('http://127.0.0.1:8000/api/transaction/')
      .then(res => {
        const transactions = res.data;
        const accountTransactions = transactions.filter(transaction => transaction.account_id === parseInt(accountId));
        setAccountTransactions(accountTransactions);
      })
      .catch(err => console.log(err));
    }, [accountId]);
    return accountTransactions;
  },

  updateTransaction(transaction) {
    return axios.put(`http://127.0.0.1:8000/api/transaction/${transaction.id}`, {transaction});
  },

  GetInstitutions() {
    const [institutions, setInstitutions] = useState([]);
    useEffect(() => {
      axios.get('/api/institutions')
      .then(res => setInstitutions(res.data))
      .catch(err => console.log(err));
    }, []);
    return institutions;
  },

  createAccount(account) {
    return axios.post('http://127.0.0.1:8000/api/account/', {account});
  },

  deleteAccount(account) {
    return axios.delete(`http://127.0.0.1:8000/api/account/${account.id}`);
  },
};

export default ApiUtil;