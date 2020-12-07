import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chainID: '',
            dateCreated: '',
            contactCount: '',
            posPercent: '',
            negPercent: '',
            tbdPercent: ''
        }
    }

    render() {
        return(
            <div id="dashboard">
                <h2>Dashboard</h2>
                <br></br>
                <div id="stats">
                    <a>Chain ID: {this.state.chainID}</a>
                    <br></br>
                    <a>Date Created: {this.state.dateCreated}</a>
                    <br></br>
                    <a>Contacts on Chain: {this.state.contactCount}</a>
                    <br></br>
                    <a>% of Positive Cases: {this.state.negPercent}</a>
                    <br></br>
                    <a>% of Negative Cases: {this.state.posPercent}</a>
                    <br></br>
                    <a>% of TBD Cases: {this.state.tbdPercent}</a>
                </div>
            </div> 
        );
    }

}

export default Dashboard;