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

        event.preventDefault();
    }


    render() {
        return (
            <form class="traceform" classonSubmit={this.handleSubmit}>
                <label>
                    Full Name
                    <input type="text" value={this.state.fullName} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Phone Number
                    <input type="text" value={this.state.phoneNumber} onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Location
                    <input type="text" value={this.state.location} onChange={this.handleChange} />
                </label>
                <br></br>
                <lable>
                    Test Results
                    <input type="text" value={this.state.testResults} onChange={this.handleChange} />
                </lable>
                <br></br>
                <input type="submit" value="Start Tracing"/>
            </form>
        );
    }
}

export default StartTrace;