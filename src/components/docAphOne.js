import React from 'react'

const DocAlphOne = () => {
	return (
		<section className="docs-main">
			<h1 id="alphone">AlphOne</h1>
			<p>A Rebasing Decentralized Algorithmic Stable Coin</p>
			<div className="hr"></div>
			<div><img src="" alt=""/></div>
			<h2 id="stable-coins">Stable Coins</h2>
			<p>
				Stable coins are crytocurrencies designed to minimize the price volatility of the crytocurrencies. A stable coin can be pegged
				to a commodity, Fiat currency or crytocurrency which are said to be backed, while those tied to an algorithm are refered to be algorithmic stablecoin or seigniorage-style(not backed). 
			</p>

			<p>
				<h4>Key Points</h4>
				<ul className="ml-4">
					<li>Stablecoins are cryptocurrencies that attempt to peg their market value to some external reference.</li>
					<li>Stablecoins may be pegged to a currency like the U.S. dollar or even cryptocurrencies. These are called crypto-backed stablecoin</li>
					<li>Stablecoins achieve their price stability via collateralization (backing) or through algorithmic mechanisms of buying and selling the reference asset or its derivatives.</li>
				</ul>
			</p>
			<p>
				<p>There are 3 categories of Stablecoins</p>
				<ol className="list-unstyled">
					<li>
						<h5>Fiat-Collateralized Stablecoins</h5>
						<div className="hr"></div>
						<p>
							Fiat-collateralized stablecoins maintain a fiat currency reserve, like the U.S. dollar, 
							as collateral to issue a suitable number of crypto coins. Other forms of collateral can 
							include precious metals like gold or silver, as well as commodities like oil, but most of
							 the present-day fiat-collateralized stablecoins use dollar reserves.

						</p>
						<p>
							Such reserves are maintained by independent custodians and are regularly audited for adherence to the necessary compliance.
							Tether (USDT) and TrueUSD are popular crypto coins that have a value equivalent to that of a single U.S. dollar and are backed by dollar deposits.
						</p>
					</li>
					<li>
						<h5>Crypto-Collateralized Stablecoins</h5>
						<div className="hr"></div>
						<p>
							Crypto-collateralized stablecoins are backed by other cryptocurrencies.
							Since the reserve cryptocurrency may also be prone to high volatility, 
							such stablecoins are “over-collateralized”—that is, a larger number of
							cryptocurrency tokens is maintained as reserve for issuing a lower number of stablecoins.
						</p>
						<p>
							For example, $2,000 worth of ether may be held as reserves for issuing $1,000 worth of crypto-backed stablecoins which accommodates for up to 50% of swings in reserve currency (ether). 
							More frequent audits and monitoring add to price stability. Backed by ethereum, MakerDAO’s DAI is pegged against the U.S. dollar and allows for using a basket of crypto-assets as a reserve.
						</p>
					</li>
					<li>
						<h5>Non-Collateralized (algorithmic) Stablecoins</h5>
						<div className="hr"></div>
						<p>
							Non-collateralized stablecoins don’t use any reserve but include a working mechanism, like that of a central bank, to retain a stable price. For instance, the dollar-pegged AMPL uses a rebase mechanism to increase or decrease the supply of tokens on need basis.
						</p>
						<p>
							Such actions are similar to a central bank printing banknotes to maintain valuations of the fiat currency. It can be achieved by implementing a smart contract on a decentralized platform that can run in an autonomous manner.
						</p>
					</li>
				</ol>
			</p>
			<h2 id="how-it-works">What Is AlphOne</h2>
			<p>
				 Alphone is a seigniorage-style coin which utilize algorithms underneath to control the coin's supply, designed to 
				 achieve price stability and balance the circulating supply of the asset using algorithms. Alphone issues more coins when price 
				 increases, and buys them off the market when the price falls.
			</p>
			<h2>How It Works</h2>
			<p>
				Alphone is an algorithm stable coin that can be purchased from Exchanges after listing, 
				You users can buy Alphone and deposit BNB based asset as a collateral.
			</p>
			<h2 id="advantages">Advantage Of Alphone</h2>
			<p>
				Alphone is soft-pegged to the value of U.S dollar, which we believe will motivate investors to view Alphone as a digital asset 
				as a usable alternative for every day-to-day transactions and also for stable store of long-term value.
				using alphone there are no limits of how much alphone you an individual must hold, unlike the traditional banking system.
			</p>
			<p>
				Primarily in the African continent most countries are suffering from inflation and that has limited foreign investors. 
				According to world bank, south Sudan the infaltion rate was around 102% between September 2016
				and September 2017, also Zimbabwe inflation rate led to the printing of $100 trillion Notes(each worth $40). Others 
				countries like Nigeria, Egypt Ghana, Malawi mozambique are experiencing some level of inflation every year.
				Alphone can serve as substitute for currencies for people living these demographies where there is severe economic instability. 

			</p>
			<h1 id="roadMap">RoadMap</h1>
			<div className="w-100">
				<img src="images/roadmap.png" alt="road map" className="roadmap"/>
			</div>
			

		</section>
	)
}

export default DocAlphOne;