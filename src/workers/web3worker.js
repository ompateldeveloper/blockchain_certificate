import Web3 from "web3";

const web3 = new Web3('https://polygon-mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// Example: Send a transaction (assuming you have a private key and sufficient funds)
export async function sendTransaction(fromAddress, privateKey, toAddress, amount) {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    
    const tx = {
        from: fromAddress,
        to: toAddress,
        value: web3.utils.toWei(amount, 'ether'),
        gas: 21000,
    };
    
    const receipt = await web3.eth.sendTransaction(tx);
    console.log(`Transaction hash: ${receipt.transactionHash}`);
}

// Example: Store certificate hash in a smart contract
export async function storeHashInContract(contractAddress, abi, hash) {
    const contract = new web3.eth.Contract(abi, contractAddress);
    const fromAddress = 'YOUR_WALLET_ADDRESS';
    const privateKey = 'YOUR_PRIVATE_KEY';
    
    const tx = contract.methods.storeHash(hash);
    const gas = await tx.estimateGas({ from: fromAddress });
    const data = tx.encodeABI();
    
    const signedTx = await web3.eth.accounts.signTransaction({
        to: contractAddress,
        data,
        gas,
    }, privateKey);
    
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Stored hash in contract: ${receipt.transactionHash}`);
}