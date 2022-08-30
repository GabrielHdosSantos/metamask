
let provider = new ethers.providers.Web3Provider(window.ethereum)
let signer

async function connectMetamask() {

    await provider.send("eth_requestAccounts", [])
    
    signer = provider.getSigner();

    console.log("Conta: ", await signer.getAddress());
}

async function getBalance() {

    const balance = await signer.getBalance()
    console.log(balance)
}


