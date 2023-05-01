testcrossabi = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "bytes",
				"name": "nonce",
				"type": "bytes"
			}
		],
		"name": "Nonce",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "chainid",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "contractAddress",
				"type": "address"
			},
			{
				"internalType": "bytes",
				"name": "data",
				"type": "bytes"
			}
		],
		"name": "bridgeCall",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "datas",
				"type": "bytes"
			}
		],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "message",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "identifier",
				"type": "uint256"
			}
		],
		"name": "myFunction",
		"outputs": [
			{
				"internalType": "bytes",
				"name": "datas",
				"type": "bytes"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]