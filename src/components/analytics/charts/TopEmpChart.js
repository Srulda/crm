import React, { Component } from "react";
import {ComposedChart, Bar, XAxis, YAxis, Tooltip, Legend }
from "recharts";
import "../style/analytics.css"
class TopEmpChart extends Component {
 
generateDataForChart = data => {
  let employees = {}
  let employeesBySales = []
  let employeesToRender = 3
  data.forEach(c => {
    if(c.sold){
      employees[c.owner]
      ? employees[c.owner]++ 
      : employees[c.owner] = 1
    }
})
Object.keys(employees)
.forEach(e => { employeesBySales
.push({name : e , sales: employees[e]})
})
let dataForChart = employeesBySales
.sort((a, b) =>  a.sales - b.sales)
.splice(employeesBySales.length - employeesToRender)
return dataForChart
}

render() {
  let data = this.generateDataForChart(this.props.data)
    return (
      <div>
       <div id="top-employees-chart" className="chart">
            <h5 id = "topEmpHeader">Top Employees</h5>
                <ComposedChart
                    layout="vertical"
                    width={450}
                    height={250}
                    data={data}
                    margin={{
                        top: 20, right: 20, bottom: 20, left: 50,
                    }}>
                    <XAxis type="number" />
                    <YAxis reversed={true} dataKey="name" type="category" />
                    <Tooltip />
                    <Legend />
<Bar dataKey="sales" barSize={25} fill="#003f5c" />
                </ComposedChart>
            </div>
      </div>
    );
  }
}

export default TopEmpChart;
