import React, { Component } from 'react';
import AddClient from './AddClient';
import Update from './Update';

class Actions extends Component {
    render() {
        return (
            <div>
                <Update/>
                <hr></hr>
                <AddClient/>
            </div>
        );
    }
}

export default Actions;