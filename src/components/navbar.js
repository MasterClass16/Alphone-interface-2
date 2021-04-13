import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';


class NavBar extends Component{
	state = {
		clicked: false
	}
	render(){
		// hamburger button color
		const hamLight = {
			background: '#5E5E5E'
		}

		const hamDark = {
			background: '#C9D1D9'
		}

		// hamburger click function
		const handleClick = () =>{
			this.setState({
				clicked: !this.state.clicked
			})
		}
		return(
			<header>
				<div className="navbar">
					<li className={this.state.clicked ? 'd-none': 'd-block list-unstyled'}>
						<NavLink exact to="/"><img src="images/logo.png" alt="company logo" className="logo mr-auto" id="logo"/></NavLink>
					</li>
					<span className={this.state.clicked ? 'd-block': 'd-none'}onClick={this.props.switchMode}><img src={this.props.lightMode} alt="ok" width="20px"/></span>
					<div className="togglenavbar" onClick={handleClick}>
						<div className={this.state.clicked ? 'ln1 hamburger' : 'hamburger '} style={!this.props.isClicked ? hamLight : hamDark}></div>
						<div className={this.state.clicked ? 'ln2 hamburger' : 'hamburger '} style={!this.props.isClicked ? hamLight : hamDark}></div>
						<div className={this.state.clicked ? 'ln3 hamburger' : 'hamburger'} style={!this.props.isClicked ? hamLight : hamDark}></div>
					</div>
				</div>
				<nav className={this.state.clicked ? 'nav1': 'nav'}>
					<ul className="d-flex list-unstyled">
						<li className="list-unstyled" onClick={handleClick}>
							<NavLink exact to="/"><img src="images/logo.png" alt="company logo" className="logo"/></NavLink>
						</li>
						<li onClick={handleClick}><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} exact to="">Documentations</NavLink></li>
						<div></div>
						<li onClick={handleClick}><a style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} href="https://github.com/MasterClass16" target="blackx">Github</a></li>
						<div></div>
						<li onClick={handleClick}><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} to="/services">Team</NavLink></li>
						<li onClick={handleClick}><button className={this.props.isClicked ? "lightmodeButton" : "darkmodeButton"}><NavLink to="./useApp">Use AlphOne</NavLink></button></li>
					</ul>
				</nav>
				<div className="desktop-nav">
					<nav className="topnav">
						<ul className="d-flex list-unstyled my-3">
							<li className="m-0">
								<NavLink exact to="/"><img src="images/logo.png" alt="company logo" className="logo mr-auto "/></NavLink>
								<ul className="my-auto ml-2 list-unstyled"><li className="my-auto"><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} exact to ="/">AlphOne</NavLink></li></ul>
							</li>
							<li className="ml-auto my-auto"><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} to="">Documentations</NavLink></li>
							<li className="my-auto"><a style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} href="https://github.com/MasterClass16" target="blackx">Github</a></li>
							<li className="my-auto"><a style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} href="#team">Team</a></li>
							<li className="my-auto"><button className={this.props.isClicked ? "lightmodeButton" : "darkmodeButton"}><NavLink to="./useApp">Use AlphOne</NavLink></button></li>
							<li onClick={this.props.switchMode}><img src={this.props.lightMode} alt="ok" width="20px"/></li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
	
}

export default withRouter(NavBar)