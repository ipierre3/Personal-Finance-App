import { createClass } from 'react';
import { Pie as PieChart } from 'react-chartjs';
import { getTopTransactionCategories } from '../../actions/component_actions';
import { all, addListener } from '../../stores/transaction';
import { fetchTransactions } from '../../util/api_util';
import { all as _all } from '../../stores/flash';
import FlashActions from '../../actions/flash_actions';

const chartOptions = {
  animation: true,
  animationEasing: "easeOutQuart",
  showTooltips: true,
  scaleShowLabels: true,
  tooltipTemplate: "<%=label%>: <%= Math.round(circumference / 6.283 * 100) %>%",
  scaleLabel({value}) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  },
  datasetLabel({datasetLabel, value}) {
    return `${datasetLabel}: ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
  }
};


const _highlights = ({
  0: "#87d6be",
  1: "#b78fb9",
  2: "#e19f8f",
  3: "#77a8c9",
  4: "#e7bd85"
});
const _colors = {
  0: "#61c9aa",
  1: "#a36fa6",
  2: "#d67d67",
  3: "#5391ba",
  4: "#dea65b"
};


const TransactionsPieChart = createClass({


  getInitialState() {
    return { transactions: all() };
  },

  _updateFlash() {
    this.setState({flash: _all()});
  },

  componentDidMount() {
    fetchTransactions(this.state.page);
    this.storeListener = addListener(this.onChange);
  },

  onChange() {
    this.setState({ transactions: all()});
  },

  componentWillUnmount() {
    this.storeListener.remove();
  },

  generateLegend() {
    const that = this;
    return Object.keys(this.transCats).map((cat, index) => {
      let color = that.getColor(index);
      color = `h${color.slice(1, color.length)}`;
      return (
        <li className="group" key={index}>
          <div className={color} ></div>
          <p className="chart-legend-cat">{cat} </p>
          <p>{accounting.formatMoney(that.transCats[cat])}</p>
        </li>
      );
    });
  },


  getChartData() {
    const that = this;
    this.transCats = getTopTransactionCategories(this.state.transactions);
    const data = [];
    Object.keys(this.transCats).forEach((cat, index) => {
      data.push(
        {
          value: that.transCats[cat],
          label: cat,
          highlight: that.getHighlight(index),
          color: that.getColor(index)
        }
      );
    });

    return data;
  },

  getHighlight(index) {
    return _highlights[index];
  },

  getColor(index) {
    return _colors[index];
  },

  render() {

    return (
      <div className="pie-chart-container group">
        <h1 className="chart-header group">Top 5 Transaction Categories</h1>
        <PieChart data={this.getChartData()} options={chartOptions} className="chart" width="550" height="200"/>
        <ul className="legend">
          {this.generateLegend()}
        </ul>
      </div>

    );
  }
});



export default TransactionsPieChart;