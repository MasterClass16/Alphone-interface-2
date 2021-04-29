import React from 'react'
import {Link, withRouter} from 'react-router-dom';


const Hero = ({isClicked}) => {
	return (
		<section>
			<div className="hero-text">
				<h1 className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s" >AlphOne</h1>
				<p className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.2s">A Rebasing Decentralized <br />Algorithmic Stable  Coin <br />  On Binance  Smart Chain</p>
				<button className={isClicked ? "lightmodeButton my-2 " : "darkmodeButton my-2"}><Link to="/useApp">Use AlphOne</Link></button>
			</div>
			
		</section>

	)
}

export default withRouter(Hero)