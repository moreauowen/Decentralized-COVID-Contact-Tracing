import React, { Component } from 'react';
import { blockTracerContract, account0 } from '../config';


class StartTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            location: '',
            testResults: '',
            success: false,
            chainID: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    handleSubmit(event) {
        event.preventDefault();
        let result = (this.state.testResults === "positive") ? true : false;
        console.log(`submitted: results are ${result}`)
        blockTracerContract.methods.startTraceChain(this.state.fullName, this.state.phoneNumber, this.state.location, result)
        .send({ from: account0, gas: 150000 }, (err, transactionHash) => {
          if (!err) {
            this.setState({
              success: true
            });
          } else {
              console.log(err);
          }
        })

        blockTracerContract.methods.getUniqueID(this.state.fullName, this.state.phoneNumber, this.state.location)
        .call()
        .then(id => {
            this.setState({
                chainID: id
            });
        });

    }

    // TODO - Can you please style the part at the bottom of the form that shows whether or not the submission was successful
    render() {
        return (
            <div id="startTrace">
                <h2>Start a trace investigation...</h2>
                <hr></hr>
                <form className="traceform" onSubmit={this.handleSubmit}>
                    <label>
                        Full Name
                        <br></br>
                        <input type="text" id='fullName' value={this.state.fullName} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Phone Number
                        <br></br>
                        <input type="text" id='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Location
                        <br></br>
                        <input type="text" id='location' value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <br></br>
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
                    <input type="submit" value="Start Tracing"/>
                </form>
                {this.state.success ? <h3>Success</h3> : <h3>Not sent yet</h3>}
                {this.state.chainID}
            </div>
        );
    }
}

export default StartTrace;