import React, { Component } from 'react';
import Web3 from 'web3';
import storehash from '../tools/storehash'
import { blockTracerContract, account0, ipfs } from '../config';


class StartTrace extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // ipfs-api variables
            ipfsHash: '',
            buffer: '',
            ethAddress: '',
            transactionHash: '',
            txReceipt: '',
            blockNumber: '',
            gasUsed: '',
            // form variables
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
    
    // Capture user file for upload to IPFS
    captureFile = e => {
        e.stopPropagation();
        e.preventDefault();
        const file = e.target.files[0];
        let reader = new window.FileReader();
        reader.readAsArrayBuffer(file);
        reader.onloadend = () => this.convertToBuffer(reader);
    }
    
    // Convert file to buffer, sets state variable
    convertToBuffer = async(reader) => {
        const buffer = await Buffer.from(reader.result);
        this.setState({buffer})
    }

    // Waits for transaction receipts, sets state variables with return values
    onClick = async () => {
        try {
            this.setState({blockNumeber: "waiting..."});
            this.setState({gasUsed:"waiting"});

            await Web3.eth.getTransactionReceipt(this.state.transactionHash, (err, txReceipt) => {
                console.log(err, txReceipt);
                this.setState({txReceipt});
            });

            await this.setState({blockNumber: this.state.txReceipt.blockNumber});
            await this.setState({gasUsed: this.state.txReceipt.gasUsed});
        } catch (error) {
            console.log(error);
        }
    }

    // Connects to users BlockTracer account and adds buffer file to network
    onSubmit = async (e) => {
        e.preventDefault();

        const accounts = await Web3.eth.getAccounts();

        console.log('Sending from BlockTracer account: ' + accounts[0]);

        const ethAddress = await storehash.options.address;
        this.setState({ethAddress});

        await ipfs.add(this.state.buffer, (err, ipfsHash) => {
            console.log(err, ipfsHash);
            this.setState({ ipfs: ipfsHash[0].hash });

            storehash.methods.sendHash(this.state.ipfsHash).send({
                from: accounts[0]
            }, (error, transactionHash) => {
                console.log(transactionHash);
                this.setState({transactionHash})
            });
        });
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
                        <select 
                          name = "testResults" 
                          id = "testResults" 
                          onChange={this.handleChange}
                        >
                            <option value="tbd">TBD</option>
                            <option value="positive">Positive</option>
                            <option value="negative">Negative</option> 
                        </select>
                    </label>
                    <label>
                        Upload Document
                        <br></br>
                        <input
                          type="file" 
                          onChage = {this.captureFile}
                        />
                    </label>
                    <hr></hr>
                    <input className="btn" type="submit" value="Start Trace Chain"/>
                </form>
                {this.state.success ? <h3>Success</h3> : <h3>Not sent yet</h3>}
                {this.state.chainID}
            </div>
        );
    }
}

export default StartTrace;