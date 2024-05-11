import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const accounts = vars.has("PRIVATE_KEY") ? [vars.get("PRIVATE_KEY")] : [];

const config: HardhatUserConfig = {
  solidity: "0.8.21",
  defaultNetwork: "localhost",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545"
    },
    lisk: {
      url: "https://rpc.sepolia-api.lisk.com",
      chainId: 4202,
      accounts
    }
  }
};

export default config;
