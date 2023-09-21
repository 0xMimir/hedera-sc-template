import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import 'solidity-coverage'

require("dotenv").config();

const LOCAL_URL = process.env.LOCAL_ENDPOINT
  ? process.env.LOCAL_ENDPOINT
  : 'http://localhost:7546/';

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
      url: LOCAL_URL,
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
