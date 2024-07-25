// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract DataStore {
    string public data;

    event DataUpdated(string newData);

    function setData(string memory _data) public {
        data = _data;
        emit DataUpdated(_data);
    }

    function getData() public view returns (string memory) {
        return data;
    }
}
