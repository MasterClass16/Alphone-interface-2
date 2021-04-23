import React, { useState } from 'react';
import StickyBox from "react-sticky-box";
import {withRouter} from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import DocAphOne from '../components/docAphOne'
import PriceStability from '../components/priceStability'


const Documentation = ({isClicked, lightMode, darkMode, docsData, rightArrow, leftArrow, lightLinkColor, darkLinkColor}) => {
		const [ clicked, notClick ] = useState(0)

		const handleClick = () => {
			notClick(!clicked)
		}
		const hamOn = {
			marginLeft: "98.2%",
		
		}
		const hamOff = {
			marginLeft: "85%",
			
		}
		const toggleBackgroundOff = {
			background: isClicked && clicked ? "#0D1117" : "transparent",
			boxShadow: isClicked && clicked ? "1px -2px 1px 1px grey" : null,
			height: "100vh"
		}
		const toggleBackground ={
			background: !isClicked && clicked ? "#dee5ed" : "transparent",
			boxShadow: !isClicked && clicked ? "1px -2px 1px 1px grey" : null,
			height: "100vh"
		}
		const doc = docsData.map(docs => {
			return docs.id >=  0 ? (
				<div>
					<div style={{height: 900, overflow: "auto"}}>
					  <div style={{display: "flex", alignItems: "flex-start"}}>
					    <StickyBox className="sidebar">
					    	<aside>
					    		<ul className={clicked ? "list-unstyled lightModeSideBar sidebar-constant" : "list-unstyled darkModeSideBar sidebar-constant"} style={isClicked ? toggleBackgroundOff : toggleBackground}>
						    		<li onClick={handleClick}>
										<img style={!clicked ? hamOn : hamOff} src={!clicked ? rightArrow : leftArrow } alt="toggle button" width="20px" className="d-lg-none"/>
									</li>
									
					    			<li onClick={handleClick}><Link to="#alphone" style={isClicked ? lightLinkColor : darkLinkColor }>AlphOne</Link></li>
					    			<div></div>
					    			<li onClick={handleClick}><Link to="#stable-coins" style={isClicked ? lightLinkColor : darkLinkColor }>Stable Coins</Link></li>
					    			<li onClick={handleClick}><Link to="#how-it-works" style={isClicked ? lightLinkColor : darkLinkColor }>How AlphOne Works</Link></li>
					    			<li onClick={handleClick}><Link to="#advantages" style={isClicked ? lightLinkColor : darkLinkColor }>Advantages</Link></li>
					    			<li onClick={handleClick}><Link to="#price-stability" style={isClicked ? lightLinkColor : darkLinkColor }>Price Stability</Link></li>
					    			<li onClick={handleClick}><Link to="#minting" style={isClicked ? lightLinkColor : darkLinkColor }>Minting AlphOne</Link></li>
					    			<li onClick={handleClick}><Link to="#oracles" style={isClicked ? lightLinkColor : darkLinkColor }>Pricing Oracles</Link></li>
					    		</ul>
					    	</aside>
					    </StickyBox>
					    <main className="doc-wrapper">
					    	<div className="doc-content">
					    		<div>
					    			<DocAphOne/>
					    			<PriceStability />
					    		</div>
					    	</div>
					    </main>
					  </div>
					</div>
				</div>
			) : null 
		})
	return(
		<section >
			<div style={!isClicked ? lightMode : darkMode} className="">
				<div className="docs py-5">
					{doc}
				</div>
			</div>
		</section>	
	)
}

export default withRouter(Documentation)
