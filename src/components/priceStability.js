import React from 'react'

const PriceStability = () => {
	return (
		<section className="docs-main">
			<h1 id="price-stability">Price Stability</h1>
			<p>
				Alphone uses a rebase mechanism to mint and redeemed for the value of $1. This process makes Alphone Demand and supply stable in the market.
				It is keen to note that when the price of Alphone is above $1, users can mint it for $1 and sell the minted Alphone at the inflated market price.
				Also when Alphone price in the market is below $1, users can buy it cheap and redeem it for exactly $1.
			</p>
			<p>
				Also when Alphone price in the market is below $1, users can buy it cheap and redeem it for exactly $1.

			</p>
			<h1 id="minting">Minting Alphone</h1>
			<p>
				Minting is defined as the computer process of validating information, creating a new block and recording that information into the blockchain
			</p>
			<p>
				The formular for minting Alphone is described below.
				(Formular)
			</p>
			<p>
				With every $1 worth of input 1 Alphone will be minted.
			</p>
			<h2 id="redeeming">Redeeming</h2>
			<p>
				Redeeming is the process of recollecting
			</p>
			<h1 id="oracles">Pricing Oracles</h1>
			<p>
				Oracles are third-party services that provide smart contracts with external information. They serve as bridges between blockchain.
				Oracles sends data from the outside world to the blockchain. The kind of data transmitted by oracles comes in many forms - Price information, Temperature measurement etc.

			</p>
			<p>	They broaden the scope in which smart contracts can operate.</p>
			<p>
				In other to ensure the probity of Alphone, data such as market price and liquidity are pool from an external oracle. The oracle used 
				is chainlink.
			</p>
			<p>
				The probity of Alphone depends on the accurate price of Alphone. 
				Alphone fetches the untampered feed of market prices provided by chainlink oracle, evaluates the information provided and when certain conditions are met it will automatically execute.
			</p>
			<h2 id="chain-link">Chainlink</h2>
			<p>
				Chainlink is a decentralized oracle network that provides real-world data to smart contracts on the blockchain.<br/>
				<span><a href="https://chain.link/">chain.link</a></span>
			</p>	

		</section>
	)
}

export default PriceStability