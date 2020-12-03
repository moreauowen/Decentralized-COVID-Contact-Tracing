pragma solidity ^0.5.6;
pragma experimental ABIEncoderV2;

contract BlockTracer {
    mapping (bytes32 => bytes32[]) private traceChains;
    mapping (bytes32 => string) private contactInfo;
    mapping (bytes32 => bool) private testResults;
    
    /** 
      * @dev Starts a new trace chain.
      * 
      * - Need to ensure this user has not already started a trace chain.
      * - Need to save contact info if not saved.
      */
    function startTraceChain(string memory fullName, string memory phone, string memory location) public returns (bytes32) {
        bytes32 uniqueId = getUniqueID(fullName, phone, location);

        // Check to see if traceChain has been created or not
        require(traceChains[uniqueId].length == 0, "User already started a trace chain!");
        
        // Check to see if contact info is saved for this user
        string memory contact = contactInfo[uniqueId];
        string memory empty = "";
        if(compareStrings(contact, empty)) {
            contactInfo[uniqueId] = phone;
        }
        
        // Create new traceChain
        traceChains[uniqueId] = [uniqueId];

        // At this point, it is successfully created -> return ID of chain
        return uniqueId;
    }
    

    /**
     * Complete this before next meeting
     */
    function joinChain(string memory fullName, string memory phone, string memory location, bytes32 chainId) public returns (bool) {
        bytes32 uniqueId = getUniqueID(fullName, phone, location);

        // Check to see if this uniqueId is already in the traceChain
        bytes32[] memory currentChain = traceChains[chainId];
        for(uint i = 0; i < currentChain.length; i++) {
            require(currentChain[i] != uniqueId, "User already in this chain");
        }

        // Check to see if contact info is saved for this user
        string memory contact = contactInfo[uniqueId];
        string memory empty = "";
        if(compareStrings(contact, empty)) {
            contactInfo[uniqueId] = phone;
        }

        // Finally, add to chain
        traceChains[chainId].push(uniqueId);
        
        // Return true when successfully added to chain
        return true;
    }
    
    /**
     * @dev Updates a user's test results
     */
    function updateTestResults(string memory fullName, string memory phone, string memory location, bool results) public returns (bool){
        bytes32 uniqueId = getUniqueID(fullName, phone, location);
        // TODO- finish this!
    }
    
    /**
    * PRIVATE METHODS BELOW ONLY! =========================================
    */
    
    /**
     * @dev Private method to get contact info
     */
    function getContactInfo(string memory fullName, string memory phone, string memory location) public view returns (string memory) {
        bytes32 uniqueId = getUniqueID(fullName, phone, location);
        return contactInfo[uniqueId];
    }

    /**
     * @dev Private method to get trace chain info
     */
    function getTraceChain(string memory fullName, string memory phone, string memory location) public view returns (bytes32[] memory) {
        bytes32 uniqueId = getUniqueID(fullName, phone, location);
        return traceChains[uniqueId];
    }
    
    /**
     * @dev Private method to get test results
     */
    function getTestResults(string memory fullName, string memory phone, string memory location) public view returns (bool) {
        bytes32 uniqueId = getUniqueID(fullName, phone, location);
        return testResults[uniqueId];
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
     * @dev Private method to get uniqueId from name, phone, and location
     */
    function getUniqueID(string memory fullName, string memory phone, string memory location) public view returns (bytes32) {
        string memory s = string(abi.encodePacked(fullName, " ", phone, " ", location));
        bytes32 uniqueId = stringToBytes32(s);
        return uniqueId;
    }

    /**
     * @dev Private method to compare strings
     */
    function compareStrings(string memory a, string memory b) private view returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}