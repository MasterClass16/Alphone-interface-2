import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';

const Footer = ({twitter, telegram, github}) => {
	return (
		<footer>
			<div className="footer-wrapper py-5">
				<ul className="list-unstyled">
					<li className="my-auto d-flex">
						<NavLink exact to="/"><img src="images/logo.png" alt="company logo" className="logo mr-auto "/></NavLink>
					</li>
				</ul>
				<ul className="list-unstyled footer-nav d-md-flex pb-3">
					<li className="my-auto mr-3 py-1"><NavLink to="/about">Documentations</NavLink></li>
					<li className="my-auto py-1"><NavLink  to="/contact">Team</NavLink></li>
					<li className="my-auto ml-auto py-1"><button className="lightmodeButton"><NavLink to="/contact">Use AlphOne</NavLink></button></li>
				</ul>
				<div id="hr"></div>
				<div className="d-flex py-3">
					<p className="my-auto">&copy; 2021 Alphone</p>
					<ul className="socials d-flex list-unstyled ml-auto my-auto">
						<li className="mx-1"><NavLink  to="/contact"><img src={github} alt="github" width="20px"/></NavLink></li>
						<li className="mx-1"><NavLink  to="/contact"><img src={telegram} alt="telegram" width="20px"/></NavLink></li>
						<li className="mx-1"><NavLink  to="/contact"><img src={twitter} alt="twitter" width="20px"/></NavLink></li>
					</ul>
				</div>
			</div>
		</footer>

	)
}

export default withRouter(Footer);