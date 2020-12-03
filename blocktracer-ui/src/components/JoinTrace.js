import React, { Component } from 'react';
import { blockTracerContract, account0 } from '../config';

class JoinTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chainID: '',
            fullName: '',
            phoneNum: '',
            location: '',
            testResults: 'tbd',
            success: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            chainID: event.target.chainID,
            fullName: event.target.fullName,
            phoneNum: event.target.phoneNum,
            location: event.target.location,
            testResults: event.target.testResults
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        blockTracerContract.methods.joinChain(this.state.chainID, this.state.fullName, this.state.phoneNum, this.state.location, this.state.testResults)
        .send({ from: account0, gas: 150000}, (err, transactionHash) => {
            if (!err) {
                this.setState({
                    success: true
                });
            } else {
                console.log(err);
            }
        })
    }

    render() {
        return (
            <div id="joinTrace">
                <h2>Join a Trace Chain</h2>
                <hr></hr>
                <form className="traceform" onSubmit={this.handleSubmit}>
                    <label>
                        Trace Chain's Unique ID:
                        <br></br>
                        <input type="text" value={this.state.chainID} onChange={this.handleChange} />
                    </label>
                    <label>
                        Full Name:
                        <br></br>
                        <input type="text" value={this.state.fullName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone Number:
                        <br></br>
                        <input type="text" value={this.state.phoneNum} onChange={this.handleChange} />
                    </label>
                    <label>
                        Location:
                        <br></br>
                        <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <label>
                        COVID-19 Test Results:
                        <br></br>
                        <select name="testResults" id="testResults" onChange={this.handleChange}>
                           <option value="tbd">TBD</option>
                           <option value="positive">Positive</option>
                           <option value="negative">Negative</option> 
                        </select>
                    </label>
                    <hr></hr>
                    <input type="submit" value="Join Trace"/>
                </form>
            </div>
        );
    }
}

export default JoinTrace;