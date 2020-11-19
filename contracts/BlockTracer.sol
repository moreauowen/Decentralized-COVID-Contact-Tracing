pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract BlockTracer {
    mapping (bytes32 => bytes32[]) private traceChains;
    mapping (bytes32 => string) private contactInfo;
    mapping (bytes32 => bool) private testResults;
  
    /**
     * @dev constructor for BlockTracer contract
     */
    constructor() public {
        // Nothing needed in constructor thus far.
    }

    /** 
      * @dev Starts a new trace chain.
      * 
      * Notes:
      * - Need to ensure this user has not already started a trace chain.
      * - Need to save contact info if not saved.
      */
    function startTraceChain(string memory fullName, string memory phone, string memory location) public view returns (bool) {
        string memory s = string(abi.encodePacked(fullName, " ", phone, " ", location));
        bytes32 uniqueId = stringToBytes32(s);

        // Check to see if traceChain has been created or not
        require(traceChains[uniqueId].length != 0, "User already started a trace chain!");
        
        // Check to see if contact info is saved for this user

        /* This is not working - ask for help
        string memory empty = "";
        if(contactInfo[uniqueId] == empty) {
            contactInfo[uniqueId] = phone;
        }
        */

        // TODO - Complete this function
    }

    /**
     * @dev Private method to get bytes32 from string (used as unique identifier)
     */
    function stringToBytes32(string memory source) private pure returns (bytes32 result) {
        bytes memory tempEmptyStringTest = bytes(source);
        if (tempEmptyStringTest.length == 0) {
            return 0x0;
        }
        assembly {
            result := mload(add(source, 32))
        }
    }
}