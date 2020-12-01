import React, { Component } from 'react';

class JoinTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            phoneNumber: '',
            location: '',
            testResults: '',
        }

    }

    render() {
        return (
            <div id="startTrace">
                <h2>Join a trace investigation...</h2>
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
                        <input id="startBtn" type="submit" value="Join Trace"/>
                    </div>
                </form>
            </div>
        );
    }
}

export default JoinTrace;