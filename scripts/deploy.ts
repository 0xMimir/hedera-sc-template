import { ethers } from "hardhat";

const SMART_CONTRACT_NAME = "HelloWorld";

async function main() {
  const lock = await ethers.deployContract(SMART_CONTRACT_NAME, ["Hello There"]);

  await lock.waitForDeployment();

  console.log(
    `${SMART_CONTRACT_NAME} deployed to ${lock.target}`
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
