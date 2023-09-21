import { ethers } from "hardhat";
import { expect } from "chai";

describe("HelloWorld", function () {
    async function deployContract(message: string) {
        const [owner, otherAccount] = await ethers.getSigners();

        const contractFactory = await ethers.getContractFactory("HelloWorld");
        const contract = await contractFactory.deploy(message);

        return { contract, owner, otherAccount };
    }

    describe("Deployment", function () {
        it("Constructor", async function () {
            const message = "Hello there";
            const { contract } = await deployContract(message);

            const contractMessage = await contract.getMessage();
            expect(contractMessage).to.eq(message);
        })
    });

    describe("Function tests", function () {
        it("addNumbers", async function () {
            const { contract } = await deployContract("doesn't matter");
            const sum = await contract.addNumbers(1, 2);
            expect(sum).to.eq(3);
        })

        it("changeMessage", async function () {
            const { contract } = await deployContract("Hello There");

            const response = await contract.changeMessage("General Kenobi!")
            expect(response).to.emit(contract, "Message");
        })
    })
})