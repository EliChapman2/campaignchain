import Web3 from "web3";

// Check if the browser has an injected web3 instance (e.g., from MetaMask)
let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // Use MetaMask's provider
  web3 = new Web3(window.ethereum);
  // Request account access if needed
  window.ethereum.request({ method: 'eth_requestAccounts' });
} else {
  // Use a fallback provider, such as a local Ganache instance or an Infura node
  const provider = new Web3.providers.HttpProvider('http://localhost:8545');
  web3 = new Web3(provider);
}

export default web3;
