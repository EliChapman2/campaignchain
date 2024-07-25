const Wallet = require('ethereumjs-wallet').default;

// Generate a new wallet
const wallet = Wallet.generate();

// Get the private key
const privateKey = wallet.getPrivateKeyString();
console.log('Private Key:', privateKey);

// Get the address
const address = wallet.getAddressString();
console.log('Address:', address);