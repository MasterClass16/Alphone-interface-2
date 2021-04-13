import React from  'react'

//components
import Hero from '../components/hero'
import About from '../components/about'
import KeyFeatures from '../components/keyFeatures'
import Team from '../components/team'
import Community from '../components/community'

const Main = ({isClicked, card, teamCard, twitter, github, linkedin, lightMode, darkMode}) => {
	return(
		<main>
			<div style={!isClicked ? lightMode : darkMode}>
				<div className="wrapper">
					<Hero 
						isClicked={isClicked}
					/>
					<About
						isClicked={isClicked}
					/>
					<KeyFeatures 
						card={card}
						isClicked={isClicked}
					/>
				</div>
			</div>
			
			<div className="team">
				<div className="wrapper">
					<Team
			            teamCard={teamCard}
			            twitter = {twitter}
			            github ={github}
			            linkedin ={linkedin}
			        />
				</div>
	       	</div>
	       	<div style={!isClicked ? lightMode : darkMode}>
		        <div className="wrapper">
		        	 <Community 
		            	isClicked = {isClicked}
			        />	
		        </div>
	        </div>
		</main>
	)
}

export default Main
