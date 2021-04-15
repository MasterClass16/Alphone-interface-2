import React, { Component } from 'react'
import { loadWeb3, loadContract } from '../web3/smartContract'

class UseApp extends Component {
	state = {
		clicked: false,
		setBalances: "",
		connected: "Connect Wallet",
		currentAddress: "",
		symbol: "",
		isConnected: false
	}
	render(){
		const handleClick = () =>{
			this.setState({
				clicked: !this.state.clicked,
			})
		}

		const getCurrentAccount = async () => {
			if(window.ethereum){
				const accounts = await window.web3.eth.getAccounts();
			    this.setState({
				connected: accounts[0].slice(0, 10),
				currentAddress: accounts[0],
				})

				return accounts[0]
			}else{
				alert("Please Download Metamask")
			}
		}


		const getBalance = async () => {
			if(this.state.isConnected){
				let address = await getCurrentAccount();
				const balance = await window.contract.methods.balanceOf(address).call();
				const symbol = await window.contract.methods.symbol().call()
				this.setState({
					setBalances: balance,
					symbol: symbol
				})
			}
			else{
				alert("Connect Wallet")
			}
			
		}
		
		const load = async () => {
			await loadWeb3()
			window.contract = await loadContract();
			this.setState({
				isConnected: true
			})
		}
		return(
			<main>
				<div style={!this.props.isClicked ? this.props.lightMode : this.props.darkMode}>
					<div className="useapp">
						<div className="d-flex flex-column mx-auto wallet-container">
							<button onClick={handleClick} className={this.props.isClicked ? "lightmodeButton mx-auto" : "darkmodeButton mx-auto"}>{this.state.connected}</button>
							<ul className={this.state.clicked && this.state.connected === "Connect Wallet" ? "wallets list-unstyled mx-auto" : "d-none" }>
								<span className="d-flex" onClick={handleClick} onMouseOut={this.state.isConnected ? getCurrentAccount : null}><img className="ml-auto" id="close" src={this.props.close} alt="close button"/></span>
								<li><button onClick={load } className="d-flex" style={this.props.isClicked ? this.props.lightMode : this.props.darkMode}><p className="my-auto">Metamask</p><span className="ml-auto"><img className="m-auto"src={this.props.metamask}alt="Metamask"/></span></button></li>
								<li><button className="d-flex" style={this.props.isClicked ? this.props.lightMode : this.props.darkMode}><p className="my-auto">TrustWallet</p> <span className="ml-auto"><img className="m-auto" src={this.props.trustwallet}alt="Metamask"/></span></button></li>
								<li><button className="d-flex" style={this.props.isClicked ? this.props.lightMode : this.props.darkMode}><p className="my-auto">Binance Chain Wallet</p><span className="ml-auto"><img className="m-auto" src={this.props.binancechain}alt="Metamask"/></span></button></li>
								<li><button className="d-flex" style={this.props.isClicked ? this.props.lightMode : this.props.darkMode}><p className="my-auto">WalletConnect</p><span className="ml-auto"><img className="m-auto" src={this.props.walletconnect}alt="Metamask"/></span></button></li>
							</ul>
						</div>
						<div className="smart-contract">
							<button onClick={getBalance} className={this.props.isClicked ? "lightmodeButton mx-auto" : "darkmodeButton mx-auto"}>check balance</button>
							<div className="address-container">
								<p className="">Address : {this.state.currentAddress}</p>
							</div>
							<p className="">Balance : {this.state.setBalances + this.state.symbol}</p>
						</div>
					</div>
				</div>
		</main>
		)
	}
}

export default UseApp
