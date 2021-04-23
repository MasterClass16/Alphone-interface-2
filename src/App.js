import React, { Component } from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

// components

import NavBar from './components/navbar'
import Footer from './components/footer'
import UseApp from './components/useApp'

// container

import Main from './containers/main'
import Documentation from './containers/documentation'

// css

import './css/bootstrap-grid.min.css';
import './css/bootstrap.min.css';
import './css/animate.css';
import './css/navbar.css';
import './css/footer.css';
import './css/main.css';

// icons

import dark from './icons/dark.svg';
import light from './icons/light.svg';
import twitter from './icons/twitter.svg'
import telegram from './icons/telegram.svg'
import github from './icons/github.svg'
import linkedin from './icons/linkedin.svg'
import metamask from './icons/metamask.svg'
import trustwallet from './icons/trustwallet.svg'
import binancechain from './icons/binancechain.svg'
import walletconnect from './icons/walletconnect.svg'
import close from './icons/close.svg'
import rightArrow from './icons/rightArrow.svg'
import leftArrow from './icons/leftArrow.svg'

class App extends Component {
  state = {
    isClicked: true,
    darkmode: dark,
    lightmode: light,
    aboutCard: [
      {
        id: 0,
        image: 'images/keyfeatures4.png',
        heading: 'A special DeFi protocol',
        paragraph: '$ALPO is forked from $AMPL, a DeFi protocol with an elastic supply model. The total supply of $ALPO is constantly changing every day.'
      },
      {
        id: 1,
        image: 'images/keyfeatures2.png',
        heading: 'Non-Collaterized',
        paragraph: '$ALPO is an independent financial primitive that does not rely on centralized collateral or lenders of last resort. '
      },
      {
        id: 2,
        image: 'images/keyfeatures3.png',
        heading: 'Price target of 1$',
        paragraph: '$ALPO uses algorithmic approach to maintain base price of $1'
      },
      {
        id: 3,
        image: 'images/keyfeatures5.png',
       heading: 'Rebase Mechanism',
        paragraph: 'AlphOne translates price-volatility into supply-volatility. This means the number of ALPO tokens in user wallets automatically increases or decreases based on price to retain price target of $1'
      },
      {
        id: 4,
        image: 'images/keyfeatures1.png',
        heading: 'A special DeFi protocol',
        paragraph: '$ALPO is forked from $AMPL, a DeFi protocol with an elastic supply model. The total supply of $ALPO is constantly changing every day.'
      }
     
    ],
    teamCard: [
      {
        id: 0,
        image: 'images/indiya.png',
        name: 'Indiya Reuben Yakubu',
        job: 'Developer',
        about: 'I am a Blockchain Product Manager, learning blockchain development in order to build impactful products in the blockchain space!',
        twitter: '',
        linkedin: '',
        github: ''
      },
      {
        id: 1,
        image: 'images/tovieye.png',
        name: 'Tovieye Moses Ozi',
        job: 'Blockchain Engineer',
        about: 'A blockchain developer building innovative apps on smart contracts and expanding the scope of money in exciting ways',
        twitter: 'https://www.twitter.com/Tovieye',
        linkedin: 'https://www.linkedin.com/in/tovieye-ozi-7011ab43/',
        github: 'https://github.com/ozimos'
      },
      {
        id: 2,
        image: 'images/rex.png',
        name: 'Ojemeh Progress Uzoma',
        job: 'Front-End/Blockchain Engineer',
        about: "With experience in web development, i'm building innovative, diverse Dapp that's brings the future closer ",
        twitter: 'https://twitter.com/ojemehprogrex',
        linkedin: 'https://www.linkedin.com/in/ojemeh-progress-459730190/',
        github: 'https://github.com/Rex739'
      },
      {
        id: 3,
        image: 'images/jebitok.png',
        name: 'Sharon Jebitok',
        job: 'Software Developer',
        about: 'Building my skills in Software Development & blockchain technology.',
        twitter: 'https://twitter.com/SharonJebitok',
        linkedin: 'https://linkedin.com/in/sharon-jebitok',
        github: 'https://github.com/jebitok-dev'
      },
      {
        id: 4,
        image: 'images/durotoye.png',
        name: ' Durotoye Oyerinde',
        job: 'Full Stack Developer',
        about: 'With background in Mechanical Engineering and experience in capacity and Web development of roughly 15 years, I know that we are limited only if and when we limit ourselves.',
        twitter: 'https://www.twitter.com/djacmarg',
        linkedin: 'https://www.linkedin.com/in/codoneer/',
        github: 'https://www.github.com/djacmarg'
      },
      {
        id: 5,
        image: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
        name: 'Blessing Emmah',
        job: 'Product manager/blockchain Developer',
        about: 'I am a Blockchain Product Manager, learning blockchain development in order to build impactful products in the blockchain space',
        twitter: '',
        linkedin: '',
        github: ''
      },
      {
        id: 6,
        image: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
        name: 'Alseyni Balde',
        job: 'IT Project Manager',
        about: 'Passionate about new technologies, blockchain, cybersecurity',
        twitter: 'https://twitter.com/Seinaly777',
        linkedin: 'https://www.linkedin.com/in/alseyni-balde',
        github: 'https://github.com/alseyni'
      },
      {
        id: 7,
        image: 'https://sunlimetech.com/portfolio/boot4menu/assets/imgs/team/img_01.png',
        name: 'Samuel Alayo',
        job: 'Developer',
        about: 'I am a Blockchain Product Manager, learning blockchain development in order to build impactful products in the blockchain space',
        twitter: '',
        linkedin: '',
        github: ''
      }
    ],
    docs: [
      {
        id: 0,
        heading: "",
        paragraph: ""
      }
    ]
  }
  render(){
    const switchMode = () => {
      this.setState({
        isClicked: !this.state.isClicked,
        darkmode: this.state.lightmode,
        lightmode: this.state.darkmode
      })
    }

    const lightMode = {
      background: '#dee5ed',
      transition: 'all 0.2s ease',
      color: '#24292E',
    }

    const lightLinkColor  = {
      color: '#C9D1D9'
    }

    const darkLinkColor = {
      color: '#24292E'
    }

    const darkMode = {
      background: '#0D1117',
      transition: 'all 0.2s ease',
      color: '#C9D1D9'
    }
    return (
      <Router>
      <div style={!this.state.isClicked ? lightMode : darkMode}>
        <div className="wrapper">
          <NavBar 
            switchMode={switchMode}
            isClicked={this.state.isClicked}
            darkMode={this.state.darkmode} 
            lightMode={this.state.lightmode}
            lightLinkColor={lightLinkColor}
            darkLinkColor={darkLinkColor}
          />
         </div> 
      </div>
          <Switch>
            <Route exact path='/' 
              render={(props)=>
                (<Main {...props}
                  darkMode= {darkMode} 
                  lightMode= {lightMode}
                  isClicked= {this.state.isClicked}
                  card= {this.state.aboutCard}
                  teamCard= {this.state.teamCard}
                  twitter= {twitter}
                  github= {github}
                  linkedin= {linkedin} 
                />)} 
            />
            <Route path="/useApp"
              render={(props)=>
                (<UseApp {...props} 
                  darkMode= {darkMode} 
                  lightMode= {lightMode}
                  isClicked= {this.state.isClicked}
                  metamask= {metamask}
                  trustwallet= {trustwallet}
                  binancechain= {binancechain}
                  walletconnect= {walletconnect}
                  close= {close}
              />)}
            />
            <Route path="/documentation"
              render={(props) =>
                (<Documentation {...props}
                  docsData={this.state.docs}
                  darkMode= {darkMode} 
                  lightMode= {lightMode}
                  rightArrow= {rightArrow}
                  leftArrow= {leftArrow}
                  isClicked= {this.state.isClicked}
                  lightLinkColor={lightLinkColor}
                  darkLinkColor={darkLinkColor}
                />)}
            />
          </Switch>
        
      <Footer 
        twitter = {twitter}
        telegram ={telegram}
        github ={github}
      />
          
      </Router>
     )
  }
}

export default App;