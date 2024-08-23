// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CertificateRegistry {
    mapping(string => bool) public certificateHashes;

    function storeHash(string memory _hash) public {
        certificateHashes[_hash] = true;
    }

    function verifyHash(string memory _hash) public view returns (bool) {
        return certificateHashes[_hash];
    }
}
