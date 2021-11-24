const { web3 } = require("hardhat");

async function main() {
    const MyTestToken = artifacts.require("MyTestToken");

    const MyTestTokenContract = await MyTestToken.new();
    console.log("MTTK address", MyTestTokenContract.address);
    const cap = await MyTestTokenContract.cap();
    const totalSupply = await MyTestTokenContract.totalSupply();
    const accounts = await web3.eth.getAccounts();
    console.log(accounts);
    console.log(cap, totalSupply);
    /*

    yarn npx hardhat verify --network rinkeby 0x5B89eFB76AEf504251eF6BD9a1B1b71D4A09C221 "0xe1b7E01906f886f3f37a4ba1e095E491d864FA80" "0x29326F9050Be6DF0eC285d55476dF4906c82DA1e" "0x7fcc8188ef983bc54e7d50c4d46d20ca0174cc37"

    */
  }
  
main()
.then(() => process.exit(0))
.catch(error => {
    console.error(error);
    process.exit(1);
});