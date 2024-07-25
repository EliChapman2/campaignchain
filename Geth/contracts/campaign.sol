// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract Campaign {
    struct Event {
        uint id;
        string data;
    }

    Event[] public events;

    function createEvent(string memory _data) public {
        events.push(Event(events.length, _data));
    }

    function getEvents() public view returns (Event[] memory) {
        return events;
    }
}
