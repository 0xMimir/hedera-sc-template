//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HelloWorld {
    string private message;

    event Message(string message);

    constructor(string memory _message) {
        message = _message;
    }

    function addNumbers(uint256 a, uint256 b) public pure returns (uint256) {
        return a + b;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

    function emitMessage() public {
        emit Message(message);
    }

    function changeMessage(string memory newMessage) public {
        message = newMessage;
        this.emitMessage();
    }
}
