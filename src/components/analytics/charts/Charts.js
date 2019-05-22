import React, { Component } from 'react';
import TopEmpChart from './TopEmpChart';
import SalesChart from './salesChart';
import LastMonthSales from './LastMonthSales';

class Charts extends Component {
    render() {
        return (
            <div>
                <div id = "chartsTop">
                <TopEmpChart data = {this.props.data}/>
                <SalesChart data = {this.props.data}/>
                </div>
                <div id = "chartsBottom">
                    <LastMonthSales data ={this.props.data} />
                </div>
                
            </div>
        );
    }
}

export default Charts;