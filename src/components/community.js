import React from 'react';

const Community = ({isClicked}) => {
	return (
		<section className="community-wrapper">
			<h1>Our Community</h1>
                  <p>You can join the community by contributing with ideas, feedback, codes, design, support and dessemination of the AlphOne coin worldwide.</p>
                  <p>Visit our <a href="https://github.com/MasterClass16">Github</a> page to be a developer.</p>
                  <p>You are welcome to discuss any project related to AlphOne with our friendly community in our Forums.</p>
                  <p>Any contribution will be welcome.</p>
                  <button className={isClicked ? "lightmodeButton" : "darkmodeButton"}><a href="dd">Join Our Community</a></button>
		</section>
	)
}

export default Community