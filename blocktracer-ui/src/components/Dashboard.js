import React, { Component } from 'react';
import { blockTracerContract } from '../config';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchID: '',
            chainID: '',
            contactCount: 0,
            numPositive: 0,
            posPercent: '',
            negPercent: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        blockTracerContract.methods.getLengthOfChain(this.state.searchID)
            .call()
            .then(len => {
                this.setState({
                    contactCount: len
                })
            })

        blockTracerContract.methods.getNumPositiveTests(this.state.searchID)
            .call()
            .then(num => {
                this.setState({
                    numPositive: num,
                    chainID: this.state.searchID
                })
            })
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    render() {
        return(
            <div id="dashboard">
                <h2>Dashboard</h2>
                <p>Enter the ChainID of the chain you want info on:</p>
                <form id="dashboardform" onSubmit={this.handleSubmit}>
                    <input id="searchID" type="text" value={this.state.searchID} onChange={this.handleChange}/>
                    <input id="dashBtn" type="submit" value="Get Info"/>
                </form>
                <br />
                <hr />
                <div id="stats">
                    <p>Chain ID: {this.state.chainID}</p>
                    <p>Contacts on Chain: {this.state.contactCount}</p>
                    <p>Num Positive Cases: {this.state.numPositive}</p>
                </div>
            </div> 
        );
    }

}

export default Dashboard;