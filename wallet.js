// Connect to MetaMask
async function connectWallet() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      const web3 = new Web3(window.ethereum);
      
      // Replace with your MZLx contract address
      const contractAddress = "0xYourContractAddressHere";
      const abi = [/* Your ABI here */];
      
      const tokenContract = new web3.eth.Contract(abi, contractAddress);
      localStorage.setItem('walletConnected', 'true');
      
      return tokenContract;
    } catch (error) {
      console.error("User denied account access");
    }
  } else {
    alert("Please install MetaMask!");
  }
