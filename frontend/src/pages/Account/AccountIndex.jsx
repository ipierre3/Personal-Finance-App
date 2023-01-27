import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import AccountShow from './AccountShow';
import Sidebar from '../../components/SideBars/Sidebar';
import TransactionIndex from './TransactionIndex';
import PieChart from './PieChart';

const AccountIndex = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [expanded, setExpanded] = useState({});
  const [overviewClicked, setOverviewClicked] = useState(true);
  const [transactionsClicked, setTransactionsClicked] = useState(false);
  const [accountClicked, setAccountClicked] = useState(false);
  const [filterAccountType, setFilterAccountType] = useState(false);
  const [typeIds, setTypeIds] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const fetchAccounts = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/account/`);
        setAccounts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchAccounts();
  }, []);

  const handleOverviewClick = () => {
    setOverviewClicked(true);
    setTransactionsClicked(false);
    setAccountClicked(false);
  };

  const handleAccountClick = () => {
    setAccountClicked(true);
  };

  const handleAllAccountsClick = () => {
    setOverviewClicked(true);
    setTransactionsClicked(false);
    setAccountClicked(false);
  };

  const handleTransactionsClick = () => {
    setOverviewClicked(false);
    setTransactionsClicked(true);
  };

  const newUserWelcome = () => {
    return (
      <div>
        <Header />
        <main className='root-content group'>
          <IndexSidebar />
          <section className='root-content-main'>
            <Header className='root-content-main-Header'>
              <h1>Welcome to FinSMART</h1>
            </Header>
            <section>
              <p className='get-started'>
                Let's get started! Try adding some accounts by clicking the
                pencil icon in the left sidebar.
              </p>
            </section>
          </section>
        </main>
        <Footer />
      </div>
    );
  };

  const accountShowSidebar = () => {
    return (
      <Sidebar 
        accountTypeClick={handleAccountTypeClick}
        showAllAccounts='true'
        allAccountsClick={handleAllAccountsClick}
        accounts={accounts}
        expanded={expanded}
        handleExpandClick={handleExpandClick}
      />
    );
  };

  if (accounts.length === 0) {
    return <NewUserWelcome />;
  } else if (accountClicked) {
    return (
      <div>
        <Header />
        <AccountShow />
        <Footer />
      </div>
    );
  } else if (transactionsClicked) {
    const HeaderText = <HeaderText />
    return (
      <div>
        <Header />
        <main className='root-content group'>
          <Sidebar accountTypeClick={handleAccountTypeClick}
            showAllAccounts='true'
            allAccountsClick={handleAllAccountsClick}
          />
          <section className='root-content-main'>
            {HeaderText}
            <TransactionIndex filterAccountType={filterAccountType} typeIds={typeIds} />
          </section>
        </main>
        <Footer />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <main className='root-content group'>
          <IndexSidebar />
          <section className='root-content-main'>
            <Header className='root-content-main-Header'>
              <PieChart />
              <h1>All Transactions</h1>
            </Header>
            <TransactionIndex />
          </section>
        </main>
        <Footer />
      </div>
    );
  }
}
