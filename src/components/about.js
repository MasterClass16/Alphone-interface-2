import React from 'react'

const About = ({isClicked}) => {
	return (
		<section className="about-section">
			<h2>What Is AlphOne</h2>
			<div className="about-wrapper d-flex flex-column flex-md-row">
				<div>
					<p>Away with all the price stability and balance on the circulating supply of assets problems! A strong currency in the world! AlphOne is an Algorithm Stablecoin that adopts Rebase Mechanism, Ethereum & BSC blockchain technology, the leaders in the smart contract evolution. The AlphOne comes up with the solution to problems with inflation pricing.</p>
					<p>The success of the AlphOne will be totally achieved with a global community of traders' specialists and experienced developers who will create the necessary tools to connect all the smart contract networks and regulatory agencies of property registration for a blockchain, everything in compliance with the countless juridictions</p>
				</div>
				<div className="w-100 about-img-container d-flex justify-center"><img className="about-img" src="images/about.png" alt=""/></div>
			</div>
		</section>
	)
}

export default About