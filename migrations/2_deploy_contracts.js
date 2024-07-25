const { campaignContract } = require("../src/contracts");

const PlayerNFT = artifacts.require("PlayerNFT");
const DataStore = artifacts.require("DataStore");

module.exports = async function (deployer, network, accounts) {
  const initialOwner = accounts[0]; // Use the first account as the initial owner

  // Deploy PlayerNFT contract
  await deployer.deploy(PlayerNFT, initialOwner);

  // Deploy DataStore contract
  await deployer.deploy(campaignContract, { from: initialOwner });
};
