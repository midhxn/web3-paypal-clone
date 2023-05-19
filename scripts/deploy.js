
const hre = require("hardhat");

async function main() {

  const Paypal = await hre.ethers.getContractFactory("Paypal");
  const paypal = await Paypal.deploy();

  await paypal.deployed();

  // console.log(
  //   `Paypal with ${ethers.utils.formatEther(
  //     paypaledAmount
  //   )}ETH and unpaypal timestamp ${unpaypalTime} deployed to ${paypal.address}`
  // );
  console.log("Paypal deployed to: ",paypal.address);
}


main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
