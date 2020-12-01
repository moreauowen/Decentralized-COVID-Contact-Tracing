import React, { Component } from 'react';

class StartTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            location: '',
            testResults: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            fullName: event.target.fullName,
            phoneNumber: event.target.phoneNumber,
            location: event.target.location,
            testResults: event.target.testResults
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }


    render() {
        return (
            <div id="startTrace">
                <h2>Start a trace investigation...</h2>
                <br></br>
                <form className="traceform" classonSubmit={this.handleSubmit}>
                    <label>
                        Full Name
                        <br></br>
                        <input type="text" value={this.state.fullName} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Phone Number
                        <br></br>
                        <input type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <label>
                        Location
                        <br></br>
                        <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <lable>
                        Test Results
                        <br></br>
                        <input type="text" value={this.state.testResults} onChange={this.handleChange} />
                    </lable>
                    <br></br>
                    <div id="startBtnParent">
                        <input id="startBtn" type="submit" value="Start Tracing"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default StartTrace;