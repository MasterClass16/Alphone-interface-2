import React from 'react'
import {Link, withRouter} from 'react-router-dom';


const Hero = ({isClicked}) => {
	return (
		<section>
			<div className="hero-text wow fadeInDown" data-wow-duration="0.6s" data-wow-delay="0.1s">
				<h1>AlphOne</h1>
				<p>A Rebasing Decentralized <br />Algorithmic Stable Coin On<br /> Binance Smart Chain</p>
				<button className={isClicked ? "lightmodeButton my-2" : "darkmodeButton my-2"}><Link to="/useApp">Use AlphOne</Link></button>
			</div>
			
		</section>

	)
}

export default withRouter(Hero)