import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"));

// NOTE - These values are gonna change each time depending on testing environment
let account0 = '0x897E3EdcEea0A27969D5145D6F9bbC037E2000B7';
let blockTracerABI = [{"constant":false,"inputs":[{"internalType":"string","name":"fullName","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"location","type":"string"}],"name":"startTraceChain","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"string","name":"fullName","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"location","type":"string"}],"name":"testMap","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"inviteToChain","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
let blockTracerAddress = '0x2D5C99220A9fab5D5928D753E69EdB45D25E6aD2';

// Export to use in React app
const blockTracerContract = new web3.eth.Contract(blockTracerABI, blockTracerAddress);
export { blockTracerContract, account0};