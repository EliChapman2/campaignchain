module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 8545,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      gas: 6721975,          // Gas limit used for deploys
      gasPrice: 20000000000, // 20 gwei (default: 100 gwei)
    },
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.20",    // Fetch exact version from solc-bin (default: truffle's version)
    }
  }
};
