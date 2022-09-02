//import ethers from hardhat package
const { ethers }=require("hardhat");
async function main() {
  //A contract factory in ether.js is an abstraction used to deploy new smart contracts, so nftContract here us a factory for instances of our GameItem Contract.

  const nftContract = await ethers.getContractFactory("GameItem");

  //here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  // wait for contract to deploy

  await deployedNFTContract.deployed();

  //print the adress of the deployed contract
  console.log("NFT Contract adress:",deployedNFTContract.address);

}

//call the main function and catch if there is any error
main()
  .then(()=> process.exit(0))
  .catch((error)=> {
    console.error(error);
    process.exit(1)
  });