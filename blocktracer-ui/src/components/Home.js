import React, { Component } from 'react';
import StartTrace from './StartTrace';
import JoinTrace from './JoinTrace';

class Home extends Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(event) {
        
    }

    showForm(elementID) {
    
    }

    hideForm() {

    }

    render() {
        return (
            <div id="home">
                <div id="welcomeMenu">
                    <h1>Welcome to BlockTracer...</h1>
                    <div id="welcomeColumn">
                        <div class="left">
                            <h3>What is BlockTracer?</h3>
                            <p>Detailed explanation of what BlockTracer is and it's use in the COVID-19 pandemic.</p>
                        </div>
                        <div class="right">
                            <h3>How do you use BlockTracer?</h3>
                            <p>Detailed explanation of BlockTracers decentralized p2p network and how to start/join investigation.</p>
                        </div>
                    </div>
                    <br></br>
                    <div id="homeOptions">
                        <h2>Lets get started!</h2>
                        <div class="left">
                            <button type="button" class="homeBtn" id="homeStartBtn" onClick={this.handleButtonClick}>Start Trace</button>
                        </div>
                        <div class="right">
                            <button type="button" class="homeBtn" id="homeJoinBtn" onClick={this.handleButtonClick}>Join Trace</button>
                        </div>
                        <br></br>
                        <h3>...already on BlockTracer?</h3>
                        <button type="button" class="homeBtn" id="homeSignInBtn" onClick={this.handleButtonClick}>Sign In</button>
                    </div>
                </div>
            </div>
        );
    }

}

export default Home;