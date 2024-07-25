// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract MintableToken {
    mapping(address => uint256) public balances;

    function mint(address to, uint256 amount) public {
        balances[to] += amount;
    }

    function getBalance(address account) public view returns (uint256) {
        return balances[account];
    }
}
