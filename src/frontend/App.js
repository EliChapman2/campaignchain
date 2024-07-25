// src/App.js
import React, { useEffect, useState } from 'react';
import AddEvent from '../components/AddEvent';
import MintPlayerNFT from '../components/MintPlayerNFT';
import web3 from '../web3';
import './App.css';

function App() {
  const [account, setAccount] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Load the user's account and campaign events on component mount
    loadBlockchainData();
  }, []);

  const loadBlockchainData = async () => {
    const accounts = await web3.eth.getAccounts();
    setAccount(accounts[0]);
  };

  return (
    <div>
      <h1>CampaignChain</h1>
      <p>Connected account: {account}</p>
      <div>
        <AddEvent />
        <MintPlayerNFT />
      </div>
      <div>
        <h2>Campaign Events</h2>
        {events.length > 0 ? (
          <ul>
            {events.map((event, index) => (
              <li key={index}>
                {event.description} (Timestamp: {new Date(event.timestamp * 1000).toLocaleString()})
              </li>
            ))}
          </ul>
        ) : (
          <p>No events recorded yet.</p>
        )}
      </div>
    </div>
  );
}

export default App;
