import React, { Component } from 'react';
import TopEmpChart from './TopEmpChart';

class Charts extends Component {
    render() {
        return (
            <div>
                <TopEmpChart data = {this.props.data}/>
            </div>
        );
    }
}

export default Charts;