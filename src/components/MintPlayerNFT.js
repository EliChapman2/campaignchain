// src/components/MintPlayerNFT.js
import React, { useState } from 'react';
import web3 from '../web3';

const MintPlayerNFT = () => {
  const [publicInfo, setPublicInfo] = useState('');
  const [encryptedInfo, setEncryptedInfo] = useState('');

  const mintPlayerNFT = async () => {
    const accounts = await web3.eth.getAccounts();
    // await playerNFTContract.methods.mintPlayerNFT(publicInfo, encryptedInfo).send({ from: accounts[0] });
    setPublicInfo('');
    setEncryptedInfo('');
  };

  return (
    <div>
      <h2>Player</h2>
      <input
        type="text"
        value={publicInfo}
        onChange={(e) => setPublicInfo(e.target.value)}
        placeholder="Public Info"
      />
      <input
        type="text"
        value={encryptedInfo}
        onChange={(e) => setEncryptedInfo(e.target.value)}
        placeholder="Encrypted Info"
      />
      <button onClick={mintPlayerNFT}>Mint Player NFT</button>
    </div>
  );
};

export default MintPlayerNFT;
