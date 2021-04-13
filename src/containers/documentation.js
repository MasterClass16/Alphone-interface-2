import React, { useState } from 'react';
import StickyBox from "react-sticky-box";
import {NavLink, withRouter} from 'react-router-dom';
import DocAphOne from '../components/docAphOne'
import RoadMap from '../components/roadMap'

const Documentation = ({isClicked, lightMode, darkMode, docsData, rightArrow, leftArrow}) => {
		const [ clicked, notClick ] = useState(0)

		const handleClick = () => {
			notClick(!clicked)
			console.log("yes")
		}

		const marginLeft = {
			marginLeft: "0",
			background: !isClicked ? "#FFFFFF" : "#090d10",
			boxShadow: !isClicked ? "1px 1px 10px 2px grey" : "1px -5px 10px 2px black",
			webkitBoxShadow: !isClicked ? "1px 1px 10px 2px grey" : "1px -5px 10px 2px black",
			mozBoxShadow: !isClicked ? "1px 1px 10px 2px grey" : "1px -5px 10px 2px black",
			width: "260%",
			zIndex: "2",
			transition: "all 0.2s ease",
		}

		const marginRight ={
			marginLeft: "-3600%"
		}

		const hamOn = {
			marginLeft: "98.2%",
		
		}

		const hamOff = {
			marginLeft: "85%",
			
		}
		const doc = docsData.map(docs => {
			return docs.id >=  0 ? (
				<div>
					<div style={{height: 900, overflow: "auto"}}>
					  <div style={{display: "flex", alignItems: "flex-start"}}>
					    <StickyBox className="">
					    	<aside>
					    		<ul style={!clicked ? marginRight : marginLeft} cl={isClicked ? "list-unstyled lightModeSideBar" : "list-unstyled darkModeSideBar"}>
						    		<li onClick={handleClick}>
										<img  style={!clicked ? hamOn : hamOff} src={!clicked ? rightArrow : leftArrow } alt="ok" width="20px"/>
									</li>
									
					    			<li onClick={handleClick}><NavLink to="#alphone">AlphOne</NavLink></li>
					    			<div></div>
					    			<li onClick={handleClick}><NavLink to="#roadmap">Road Map</NavLink></li>
					    			
					    			<li onClick={handleClick}><NavLink to="#alphone">Audits</NavLink></li>
					    			
					    			<li onClick={handleClick}><NavLink to="#roadmap">Mechanism</NavLink></li>
					    			
					    			<li onClick={handleClick}><NavLink to="#alphone">Support Desk</NavLink></li>
					    			
					    			<li onClick={handleClick}><NavLink to="#roadmap">Files and Sources</NavLink></li>
					    			
					    			<li onClick={handleClick}><NavLink to="#alphone">Copyright and Licence</NavLink></li>
					    			
					    		</ul>
					    	</aside>
					    </StickyBox>
					    <main className="doc-wrapper">
					    	<div className="doc-content">
					    		<div>
					    			<DocAphOne />
					    			<RoadMap />
					    			<DocAphOne id="alphone"/>
					    			<RoadMap id="roadmap"/>
					    			<DocAphOne id="alphone"/>
					    			<RoadMap id="roadmap"/>
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
			<div style={!isClicked ? lightMode : darkMode}>
				<div className="">
					{doc}
				</div>
			</div>
		</section>	
	)
}

export default withRouter(Documentation)
