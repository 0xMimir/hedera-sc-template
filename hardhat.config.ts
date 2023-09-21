import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage'

require("dotenv").config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
    testnet: {
      url: process.env.TESTNET_ENDPOINT,
      accounts: [
        process.env.TESTNET_OPERATOR_PRIVATE_KEY as string
      ]
    },
    local: {
      url: 'http://localhost:7546/',
      accounts: [
        process.env.LOCAL_OPERATOR_PRIVATE_KEY as string
      ]
    }
  },
  paths: {
    sources: './contracts',
    tests: './tests',
    cache: "./cache",
    artifacts: "./artifacts"
  }
};

export default config;
