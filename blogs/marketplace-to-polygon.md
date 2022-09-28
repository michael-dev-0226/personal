---
title: "NFT Marketplace on the Polygon Network"
summary: "Create a Full Stack NFT Marketplace on the Polygon Network"
date: "2022-01-17"
---

- [Marketplace Functions](#marketplace-functions)
- [How Does Polygon Work?](#how-does-polygon-work)
- [Setting-up Playground](#setting-up-playground)
- [Back-end](#back-end)
- [Front-end](#front-end)
- [Running the app](#running-the-app)
- [Repository](#repository)

## Marketplace Functions
When a user puts an NFT for sale, the ownership of the NFT gets transferred from the creator to the marketplace contract.

When a user purchases an NFT, the purchase price is transferred from the buyer to the seller and so the item will be transferred from the marketplace to the buyer.

The marketplace owner is able to set a listing fee. This fee is taken from the seller and transferred to the contract owner upon completion of any sale, enabling the owner of the marketplace to earn recurring revenue from any sale transacted in the marketplace.

We will be deploying the smart contract on Polygon Network.


## How Does Polygon Work?
Polygon is a multi-level platform with the aim to scale Ethereum thanks to a plethora of sidechains, all of which aim to unclog with the main platform in an effective and cost-efficient manner.

Polygon’s main chain is a Proof of Stake (PoS) sidechain in which network participants can stake MATIC tokens to validate transactions and vote on network upgrades.

## Setting-up Playground
1. Create a next.js app

> $ yarn install

`nano`

    <html>
      <head>
      </head>
    </html>


2. Install packages
```
npm install ethers hardhat ethereum-waffle chai @nomiclabs/hardhat-waffle @nomiclabs/hardhat-ethers web3modal @openzeppelin/contracts ipfs-http-client axios react-toastify
```

## Back-end
```
$ yarn install
```

If given error for README.md file delete and retry

4. Edit hardhat.config.js file as given:
<script src="https://gist.githubusercontent.com/ac12644/b0934492ea9c1f1eb184aa774ed15fbc/raw/968830ad337ef2ddf01f8f1855ef27a880c48090/NFTMarketplace.sol"></script>

## Front-end
In this part, we will see how to connect deployed smart contract with the next.js frontend.

## Running the app
Now we can test out the app!
