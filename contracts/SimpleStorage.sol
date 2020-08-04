pragma solidity ^0.5.0;

contract SimpleStorage {
    uint256 public storedData;

    constructor(uint256 initVal) public {
        storedData = initVal;
    }

    function set(uint256 x) public {
        storedData = x;
    }

    function get() public view returns (uint256 retVal) {
        return storedData;
    }
}
