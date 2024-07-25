// src/contracts.js
import web3 from './web3';

const campaignABI = [
  // ... ABI array for Campaign contract ...
];
const campaignAddress = '0x97667f840d5e0f4ba86516e8e576f95d41226d0e';

const playerNFTABI = [
  // ... ABI array for PlayerNFT contract ...
];
const playerNFTAddress = '0x97667f840d5e0f4ba86516e8e576f95d41226d0e';

const campaignContract = new web3.eth.Contract(campaignABI, campaignAddress);
const playerNFTContract = new web3.eth.Contract(playerNFTABI, playerNFTAddress);

export { campaignContract, playerNFTContract };

