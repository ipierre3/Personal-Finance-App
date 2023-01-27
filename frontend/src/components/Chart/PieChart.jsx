// COMPONENT COMPLETED

import React, { useState, useEffect } from 'react';
import { Pie as PieChart } from 'react-chartjs';
import accounting from 'accounting';
import axios from 'axios';


const chartOptions = {
  animation: true,
  animationEasing: 'easeOutQuart',
  showTooltips: true,
  scaleShowLabels: true,
  tooltipTemplate:
    '<%=label%>: <%= Math.round(circumference / 6.283 * 100) %>%',
  scaleLabel({ value }) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  },
  datasetLabel({ datasetLabel, value }) {
    return `${datasetLabel}: ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
  },
};

const _highlights = {
  0: '#87d6be',
  1: '#b78fb9',
  2: '#e19f8f',
  3: '#77a8c9',
  4: '#e7bd85',
};
const _colors = {
  0: '#61c9aa',
  1: '#a36fa6',
  2: '#d67d67',
  3: '#5391ba',
  4: '#dea65b',
};

const TransactionsPieChart = () => {
  const [transactions, setTransactions] = useState([]);
  const [flash, setFlash] = useState([]);
  const [page, setPage] = useState(1);
  
  const fetchTransactions = async (page) => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/transaction/?page=${page}`);
      setTransactions(response.data);
    } catch (error) {
      setFlash(error.message);
    }
  }
  
  useEffect(() => {
    fetchTransactions(1);
  }, [page]);

  useEffect(() => {
    setFlash(flash);
    }, [flash]);
  
  const transCats = getTopTransactionCategories(transactions);
  
  const generateLegend = () => {
    return Object.keys(transCats).map((cat, index) => {
      let color = getColor(index);
      color = `h${color.slice(1, color.length)}`;
      return (
        <li className='group' key={index}>
          <div className={color}></div>
          <p className='chart-legend-cat'>{cat} </p>
          <p>{accounting.formatMoney(transCats[cat])}</p>
        </li>
      );
    });
  };
  
  const getChartData = () => {
    const data = [];
    Object.keys(transCats).forEach((cat, index) => {
      data.push({
        value: transCats[cat],
        label: cat,
        highlight: getHighlight(index),
        color: getColor(index),
      });
    });
    return data;
  };
  
  const getHighlight = (index) => {
    return _highlights[index];
  };
  
  const getColor = (index) => {
    return _colors[index];
  };
  
  return (
    <div className='pie-chart-container group'>
      <h1 className='chart-header group'>Top 5 Transaction Categories</h1>
      <PieChart
        data={getChartData()}
        options={chartOptions}
        className='chart'
        width='550'
        height='200'
        />
      <ul className='legend'>{generateLegend()}</ul>
    </div>
  );
};

const getTopTransactionCategories = (transactions) => {
  const categoriesIdx = {};
  const catAmounts = {};
  transactions.forEach((transaction) => {
    if (transaction.category !== "UNCATEGORIZED") {
      if (!categoriesIdx[transaction.category]) {
        categoriesIdx[transaction.category] = [];
        catAmounts[transaction.category] = 0;
      }
      categoriesIdx[transaction.category] = transaction;
      catAmounts[transaction.category] += Math.abs(parseFloat(transaction.amount_n));
    }
  });
  return catAmounts;
};

export default TransactionsPieChart;