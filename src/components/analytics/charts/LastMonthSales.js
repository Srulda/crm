import React, { Component } from "react";
import { XAxis, YAxis, Legend, LineChart, Line } from "recharts";
import "../style/analytics.css";

class LastMonthSales extends Component {
    
  getFormmatedDate = date => {
    date = new Date(date);
    let day = date.getDate();
    return day;
  };
  getMonth = () => {
    let month = new Date().toLocaleString("en-us", { month: "long" });
    return month;
  };

  getDataForChart = () => {
    let filteredData = this.props.data.map(d => ({
      contact: new Date(d.firstContact),
      sold: d.sold
    }));
    let subsDate = filteredData
      .map(m => ({
        days: Math.round(
          Math.abs(new Date() - m.contact) / 1000 / 60 / 60 / 24
        ),
        date: m.contact,
        sold: m.sold
      }))
      .filter(s => s.days < 386 && s.days > 355 && s.sold === true);

    let arr = [];
    let obj = {};

    subsDate.forEach(d => {
      obj[d.date] ? obj[d.date]++ : (obj[d.date] = 1);
    });

    Object.keys(obj).forEach(d =>
      arr.push({ date: this.getFormmatedDate(d), sales: obj[d] * 4 })
    );
    let sortedArr = arr.sort((a, b) => a.date - b.date);
    return sortedArr;
  };

  render() {
    return (
      <div>
        <span id="salesByMonthHeader">{this.getMonth(Date.now())} Sales:</span>
        <LineChart
          width={1000}
          height={250}
          data={this.getDataForChart()}
          margin={{ top: 5, right: 30, left: 47, bottom: 5 }}
        >
          <XAxis dataKey="date" />
          <YAxis />
          <Legend />
          <Line
            strokeWidth={5}
            type="monotone"
            dataKey="sales"
            stroke="#82ca9d"
          />
        </LineChart>
      </div>
    );
  }
}

export default LastMonthSales;
