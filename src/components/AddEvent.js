// src/components/AddEvent.js
import React, { useState } from 'react';
import web3 from '../web3';

const AddEvent = () => {
  const [description, setDescription] = useState('');

  const addEvent = async () => {
    const accounts = await web3.eth.getAccounts();
    // await campaignContract.methods.addEvent(description).send({ from: accounts[0] });
    setDescription('');
  };

  return (
    <div>
      <h2>Dungeon Master</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
      />
      <button onClick={addEvent}>Add Event</button>
    </div>
  );
};

export default AddEvent;
