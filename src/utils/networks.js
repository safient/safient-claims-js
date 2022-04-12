import dotenv from 'dotenv'
dotenv.config()


export const networks = {
  "localhost": {
    "chainId": 31337,
    "url": "http://localhost:8545",
    "addresses": {
      "AutoAppealableArbitrator": "0x5FbDB2315678afecb367f032d93F642f64180aa3",
      "SafientMain": "0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512"
    }
  },
  "mainnet": {
    "chainId": 1,
    "url": `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    "addresses": {
      "AutoAppealableArbitrator": "",
      "SafientMain": ""
    }
  },
  "rinkeby": {
    "chainId": 4,
    "url": "",
    "addresses": {
      "AutoAppealableArbitrator": "0xf54D6b97749ECD28F9EbF836Ed9cE0C387a2f0A1",
      "SafientMain": "0x2fF492C5D9d071a2bed17e30418aF128f22e42fA"
    }
  },
  "kovan": {
    "chainId": 42,
    "url": `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    "addresses": {
      "AutoAppealableArbitrator": "0xf54D6b97749ECD28F9EbF836Ed9cE0C387a2f0A1",
      "SafientMain": "0xF88915c8762aB973b64086221cDFd20Ec104F732"
    }
  },
  "ropsten": {
    "chainId": 3,
    "url": "",
    "addresses": {
      "AutoAppealableArbitrator": "0xf54D6b97749ECD28F9EbF836Ed9cE0C387a2f0A1",
      "SafientMain": "0xC0B0591Eac7887F443cef0f28BB818E454eD6637"
    }
  },
  "polygontestnet": {
    "chainId": 80001,
    "url": `https://matic-mumbai.chainstacklabs.com`,
    "addresses": {
      "AutoAppealableArbitrator": "0xf54D6b97749ECD28F9EbF836Ed9cE0C387a2f0A1",
      "SafientMain": "0xccA53824ce8944a3cB7b21139bd177DEEe6e27C0"
    }
  }
}