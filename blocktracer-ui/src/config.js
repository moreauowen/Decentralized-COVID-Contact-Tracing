import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000/"));

// TODO: fill these with contract details
let account0 = '';
let blockTracerABI = [];
let blockTracerAddress = '';

const blockTracerContract = new web3.eth.Contract(blockTracerABI, blockTracerAddress);
export { blockTracerContract, account0};