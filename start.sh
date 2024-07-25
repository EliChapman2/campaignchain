#!/bin/bash

# Define paths and configurations
GETH_DATADIR="./data"
GENESIS_FILE="./genesis.json"
GETH_NETWORKID="1337"
GETH_HTTP_ADDR="0.0.0.0"
GETH_HTTP_PORT="8545"
GETH_CORS_DOMAIN="*"
GETH_API="eth,web3,personal,net,miner,admin"
GETH_ALLOW_INSECURE_UNLOCK="--allow-insecure-unlock"
GETH_NODISCOVER="--nodiscover"
GETH_GASCAP="--rpc.gascap 10000000"

# wipe the old blockchain and wallet/keystore
cd geth
rm -rf ./data/geth
rm -rf ./data/geth.ipc

tmux kill-session -t my_session 

# Initialize Geth with the genesis file
echo "Initializing Geth with genesis file..."
geth --datadir ./data init $GENESIS_FILE

# Start tmux session
tmux new-session -d -s my_session

# Deploy contracts using Truffle in the second tmux window
echo "Deploying contracts with Truffle..."
tmux new-window -t my_session
tmux send-keys -t my_session:1 "cd geth" C-m
tmux send-keys -t my_session:1 "truffle migrate --network development" C-m

# Start Geth in the first tmux window
echo "Starting Geth..."
tmux send-keys -t my_session "geth --datadir ./data --networkid 1337 --http --http.addr "0.0.0.0" --http.port 8545 --http.corsdomain \"*\" --http.api eth,web3,personal,net,miner,admin --allow-insecure-unlock --nodiscover --rpc.gascap 10000000 --mine" C-m

echo "Waiting for Geth to start..."
sleep 10

# Start the React frontend in the third tmux window
echo "Starting React frontend..."
tmux new-window -t my_session
tmux send-keys -t my_session:2 "cd ../src && npm start" C-m

# Attach to tmux session
tmux attach -t my_session