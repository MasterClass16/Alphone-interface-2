import React from 'react'
import {Link, withRouter} from 'react-router-dom';


const Hero = ({isClicked}) => {
	return (
		<section>
			<div className="hero-text">
				<h1>AlphOne</h1>
				<p>A Rebasing Decentralized <br />Algorithmic Stable Coin On<br /> Binance Smart Chain</p>
				<button className={isClicked ? "lightmodeButton my-2" : "darkmodeButton my-2"}><Link to="/useApp">Use AlphOne</Link></button>
			</div>
			
		</section>

	)
}

export default withRouter(Hero)