import React from 'react'

const RoadMap = () => {
	return (
		<section className="docs-main" id="roadmap">
			<h1>Roadmap</h1>
			<p>A Rebasing Decentralized Algorithmic Stable Coin</p>
			<div className="hr"></div>
			<div><img src="" alt=""/></div>
			<p>
				What is a Stablecoin? A Stablecoin is a digital asset pegged to a traditionally stable fiat currency like the US $Dollar. 
				The use of stablecoins in Decentralized Finance(DeFi)  is considered a cornerstone for smart investing.
				Stablecoins provide an excellent way to hedge during times of market instability.
				Stablecoins are also used as a safer and consistent valued token in trading pairs when added to Liquidity Pools. 
				The primary use of stablecoins is centered around its stability and predictability in a traditionally volatile crypto coin market. 
				It offers DeFi users, especially traders, a hedge against volatility and provide stability when farming token pairs.
			</p>
			<p>
				There are a few methods of issuing a stablecoin that can maintain a consistent market value peg. Some Stablecoins are entirely Fiat backed(USDC),
				others are crypto-collateralized(DAI), there are also some algorithmically stabilized(Basis, ESD, DSD). 
				The issue with Fiat-backed stablecoins is that they are not 100% decentralized(USDC) and crypto-collateralized stablecoins(DAI) have issues with over-collateralization. 
				The purely algorithmic stablecoin protocols (Basis, ESD, DSD) provide a very noble solution to maintain the consistency of stablecoins with out any Fiat backed assets. 
				The issue with these purely algorithmically backed stablecoin protocols  is their tendency to overreact during a big but quick correction in the market.
				This results in many of these algo-stablecoins ending up in a dead zone and struggle to return to their peg. The answer lies in utilizing a bit of each approach to creating a true decentralized stablecoin.
			</p>
			<p>
				If the market price of IRON(data provided by the Oracle) is above $1.00, the protocol adjusts the ratio required to Mint IRON. Regulated by the protocol, the Target Collateral Ratio(TCR) is adjusted  down by 0.25% per hour (max 6% a day). 
				More STEEL and less BUSD is need to mint IRON.
			</p>
		</section>
	)
}

export default RoadMap