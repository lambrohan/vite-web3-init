import Web3 from 'web3/dist/web3.min.js'

const url = 'https://mainnet.infura.io/v3/3a6c24b4ff074a3cb9ae9a74f3473db2'

window.addEventListener('load', async () => {
	const web3: Web3 = new Web3(url)
	const addr = '0x0016C0d0343e8f2c3A7b6A51606B84B1545Ec606'

	//lets read the balance
	const balance = await web3.eth.getBalance(addr)
	console.log(
		'The balance of the account is ',
		web3.utils.fromWei(balance, 'ether')
	)
})
