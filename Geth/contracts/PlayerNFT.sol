// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract PlayerNFT is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) private playerPublicInfo;
    mapping(uint256 => string) private playerEncryptedInfo;

    constructor(address initialOwner) ERC721("D&D Player", "DDP") Ownable() {
        transferOwnership(initialOwner);
    }

    function mintPlayerNFT(
        string memory publicInfo,
        string memory encryptedInfo
    ) public onlyOwner {
        _mint(msg.sender, nextTokenId);
        playerPublicInfo[nextTokenId] = publicInfo;
        playerEncryptedInfo[nextTokenId] = encryptedInfo;
        nextTokenId++;
    }

    function getPlayerPublicInfo(uint256 tokenId) public view returns (string memory) {
        return playerPublicInfo[tokenId];
    }

    function getPlayerEncryptedInfo(uint256 tokenId) public view returns (string memory) {
        require(ownerOf(tokenId) == msg.sender, "Not the owner");
        return playerEncryptedInfo[tokenId];
    }
}
