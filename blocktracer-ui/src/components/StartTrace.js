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

        blockTracerContract.methods.startTraceChain(this.state.fullName, this.state.phoneNumber, this.state.location)
        .send({ from: account0, gas: 150000 }, (err, transactionHash) => {
          if (!err) {
            this.setState({
              success: true
            });
          } else {
              console.log(err);
          }
        })

    }

    // TODO - Can you please style the part at the bottom of the form that shows whether or not the submission was successful
    render() {
        return (
            <div id="startTrace">
                <h2>Start a trace investigation...</h2>
                <br></br>
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
                        Test Results
                        <br></br>
                        <input type="text" id='testResults' value={this.state.testResults} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <div id="startBtnParent">
                        <input id="startBtn" type="submit" value="Start Tracing"/>
                    </div>
                </form>
                {this.state.success ? <h3>Success</h3> : <h3>Not sent yet</h3>}
            </div>
        );
    }
}

export default StartTrace;