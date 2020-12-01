import Web3 from 'web3';
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545/"));

// TODO: fill these with contract details
let account0 = '0x92d7E6838788e620A8de81d06CF557E356E0175D';
let blockTracerABI = [{"constant":false,"inputs":[{"internalType":"string","name":"fullName","type":"string"},{"internalType":"string","name":"phone","type":"string"},{"internalType":"string","name":"location","type":"string"}],"name":"startTraceChain","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"inviteToChain","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
let blockTracerAddress = '0xfBB34cecC68F4A27E3C27608946eb1D7Db4AFA40';

const blockTracerContract = new web3.eth.Contract(blockTracerABI, blockTracerAddress);
export { blockTracerContract, account0};