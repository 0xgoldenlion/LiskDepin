## Introduction

The architecture of Raspi Connect is structured to integrate seamlessly with both Raspberry Pi hardware and blockchain technology. Here's a breakdown of the core components and how they function together:

### Raspberry Pi Setup
**GPIO Pins:** The Raspberry Pi uses General Purpose Input/Output (GPIO) pins to interact with and control home devices like lights, fans, and other appliances.

**Python Listener:** A dedicated Python script runs on the Raspberry Pi, listening for events from the blockchain. This script controls the GPIO pins based on the commands received from the smart contract.

### Blockchain Integration
Smart Contracts: These are deployed on a lisk network They manage the authentication, authorization, and status tracking of the GPIO pins. The smart contract includes functions to update pin statuses and access controls, and emits events whenever a pin status is updated.

**Events:** Events are emitted by the smart contract to indicate a change in pin status or access control. These are crucial for the real-time updating of the Raspberry Pi GPIO pins via the Python listener.

### Communication Flow
**Event Emission:** When an authorized user updates a pin status via the blockchain (for instance, turning a light on or off), the smart contract emits an event that includes the device ID, pin number, and new status.

**Python Listener:** The Python script on the Raspberry Pi listens for these events. Upon detecting an event, the script updates the GPIO pins to reflect the new status, effectively controlling the connected device.

### Security and Authentication
**Blockchain Security:** Leveraging blockchain for controlling IoT devices enhances security by ensuring that all commands are encrypted, immutable, and traceable. This prevents unauthorized access and manipulation.

**Smart Contract-Based Authentication:** Only authorized users can interact with the smart contract to change pin statuses. This layer of authentication ensures that only legitimate commands are executed by the Raspberry Pi.

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/en/download/)
- [Python 3+](https://www.python.org/downloads/)
- Windows 8+ (for simulating GPIO pins)
- [Windows Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) - Only for Windows (Simulating GPIO pins on Windows)
- [Raspberry Pi](https://www.raspberrypi.org/products/raspberry-pi-4-model-b/) (for actual GPIO pins)

### Steps

This project consists of three main components:

#### 1. Compiling and Deploying Contract

> Copy `.env.example` to `.env` and fill in the required environment variables.

1. Install required dependencies

```bash
npm install
```

2. Compile the contract

```bash
npx hardhat compile
```

3. Set Private Key to hardhat config variables (For deploying contract to network. Make sure you dont use your primary account)

```bash
npx hardhat vars set PRIVATE_KEY
```

3. Deploy the contract

```bash
npx hardhat run scripts/deploy.ts --network <network>
```

#### 2. Starting Client

> Copy `client/.env.example` to `client/.env` and fill in the deployed contract address and other required environment variables.

1. Install required dependencies

```bash
cd client

npm install
```

2. Start the client

```bash

npm run dev
```

3. Navigate to `http://localhost:3000` in your browser to see the client. Connect your wallet and start using the app.

4. Register Device with the contract by clicking the "+ Device" button in the client interface.

5. Load the control panel with registered device Id by entering device Id and click on arrow button.


#### 3. Setup Contract Event Listener and Rasp Pi GPIO Simulator

> Copy `.env.example` to `.env` and fill in the contract address and RPC URL.

1. Install required dependencies

```bash
pip install -r requirements.txt
```

2. Run the event listener

```bash
python listener.py
```

3. Enter the registered device Id in previous step when prompted.


## Usage

1. Connect your wallet to the client interface and register a device with the contract.

2. Load the control panel with registered device Id by entering device Id and click on arrow icon.

3. Start the event listener in new terminal and enter the registered device Id when prompted.

4. Use the client interface to turn pins on or off.

5. The event listener will listen for choosen device events in the contract and simulate/update the GPIO pins on the Raspberry Pi.


## Built With

- [Hardhat](https://hardhat.org/) - Ethereum development environment for compiling, testing, deploying, and interacting with smart contracts
- [Solidity](https://docs.soliditylang.org/en/v0.8.24/) - Ethereum's smart contract programming language
- [Web3.py](https://web3py.readthedocs.io/en/stable/) - Python library for interacting with Ethereum blockchain
- [GPIO Simulator](https://pypi.org/project/GPIOSimulator/) - Python library for simulating GPIO pins
- [RPi.GPIO](https://pypi.org/project/RPi.GPIO/) - Python library for accessing GPIO pins on Raspberry Pi
- [React + Vite](https://vitejs.dev/) - Frontend development environment for building fast and modern web apps

## contracts 

[0xC7d966Cc0E5Ec53940D31cf64426b3198678c181](https://sepolia-blockscout.lisk.com/address/0xC7d966Cc0E5Ec53940D31cf64426b3198678c181)

## License

This project is licensed under the MIT License
