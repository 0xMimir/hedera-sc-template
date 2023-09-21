# Smart contract template

This is template with everything needed to start developing smart contracts on hedera network. This project contains sample smart contract `HelloWorld`, tests for it and script to deploy it. This project uses hardhat to manage smart contract, test and scripts, while hardhat was design to for ethereum network, it can interact with hedera [hedera json rpc relay](https://github.com/hashgraph/hedera-json-rpc-relay). 

### Setting up

If you wish to test locally run: 
```sh
npm install
npm run setup
```

This will create local hedera node, network explorer and rpc relay. If you don't mind testing on hedera testnet add `TESTNET_OPERATOR_PRIVATE_KEY` and add `TESTNET_ENDPOINT` to env. 

### Testing

In order to test run:
```sh
npm test
```

If you wish to test on local network run:
```sh
npx hardhat test --network local
```

If you wish to test on testnet run:
```sh
npx hardhat test --network testnet
```

### Deploying 

In order to deploy on local network run:
```sh
npx hardhat run scripts/deploy.ts --network local
HelloWorld deployed to 0xC6508Aa1241e295fC3319567B3Db1720F0dFef68
```

In order to deploy on testnet run:
```sh
npx hardhat run scripts/deploy.ts --network testnet
HelloWorld deployed to 0x5b35C00a3c8aBc2d491CE5e9954596EF66ca1Eb2
```

And by searching on [hashscan](https://hashscan.io/) and selecting testnet, you can see smart contract deployed [here](https://hashscan.io/testnet/contract/0.0.2243811)

### Code coverage

If you wish to see code coverage on your smart contract run
```
npx hardhat coverage
...
-----------------|----------|----------|----------|----------|----------------|
File             |  % Stmts | % Branch |  % Funcs |  % Lines |Uncovered Lines |
-----------------|----------|----------|----------|----------|----------------|
 contracts/      |      100 |      100 |      100 |      100 |                |
  HelloWorld.sol |      100 |      100 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|
All files        |      100 |      100 |      100 |      100 |                |
-----------------|----------|----------|----------|----------|----------------|

> Istanbul reports written to ./coverage/ and ./coverage.json
```

After that html file will be generated in `coverage/index.html` that shows code coverage. In order to keep track of your code coverage go to [codecov](https://about.codecov.io/) and sign up, then setup code coverage tracking for your github repo. And just like that you can have badge on your project keeping track of your code coverage here is for this template:

[![codecov](https://codecov.io/gh/0xMimir/hedera-sc-template/graph/badge.svg?token=sdLReblRxa)](https://codecov.io/gh/0xMimir/hedera-sc-template)