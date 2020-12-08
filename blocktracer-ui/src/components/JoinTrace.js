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
            testResults: '',
            success: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let results = (this.state.testResults === "positive") ? true : false;
        console.log(`submitted: results are ${this.state.testResults}`)
        blockTracerContract.methods.joinChain( 
            this.state.fullName, 
            this.state.phoneNum, 
            this.state.location,
            this.state.chainID,
            results)
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
                        <input id="chainID" type="text" value={this.state.chainID} onChange={this.handleChange} />
                    </label>
                    <label>
                        Full Name:
                        <br></br>
                        <input id="fullName" type="text" value={this.state.fullName} onChange={this.handleChange} />
                    </label>
                    <label>
                        Phone Number:
                        <br></br>
                        <input id="phoneNum" type="text" value={this.state.phoneNum} onChange={this.handleChange} />
                    </label>
                    <label>
                        Location:
                        <br></br>
                        <input id="location" type="text" value={this.state.location} onChange={this.handleChange} />
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
                    <input className="btn" type="submit" value="Join Trace Chain"/>
                </form>
                {this.state.success ? <h3>Success</h3> : <h3>Not sent yet</h3>}
            </div>
        );
    }
}

export default JoinTrace;