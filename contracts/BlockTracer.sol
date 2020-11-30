pragma solidity ^0.7.0;
pragma experimental ABIEncoderV2;

contract BlockTracer {
    mapping (bytes32 => bytes32[]) private traceChains;
    mapping (bytes32 => string) private contactInfo;
    mapping (bytes32 => bool) private testResults;
  
    /*
     * @dev constructor for BlockTracer contract
     
    constructor() public {
        // Nothing needed in constructor thus far.
    }*/

    /** 
      * @dev Starts a new trace chain.
      * 
      * Notes:
      * - Add timestamp as part of unique ID
      * - Need to ensure this user has not already started a trace chain.
      * - Need to save contact info if not saved.
      */
    function startTraceChain(string memory fullName, string memory phone, string memory location) public returns (bool) {
        string memory s = string(abi.encodePacked(fullName, " ", phone, " ", location));
        bytes32 uniqueId = stringToBytes32(s);

        // Check to see if traceChain has been created or not
        if(traceChains[uniqueId].length != 0) {
            return false;
        }
        require(traceChains[uniqueId].length != 0, "User already started a trace chain!");
        
        // Check to see if contact info is saved for this user
        string memory contact = contactInfo[uniqueId];
        string memory empty = "";
        if(compareStrings(contact, empty)) {
            contactInfo[uniqueId] = phone;
        }
        
        // Create new traceChain
        traceChains[uniqueId] = [uniqueId];

        // At this point, it is successfully created
        return true;
    }

    /**
     * Complete this before next meeting
     */
    function inviteToChain() public view returns (bool) {

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

    /**
     * @dev Private method to compare strings
     */
    function compareStrings(string memory a, string memory b) private view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}