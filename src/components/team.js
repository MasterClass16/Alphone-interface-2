import React from 'react'

const Team = ({teamCard, twitter, github, linkedin}) => {
    const teamcards = teamCard.map(team=>{
        return team.id >= 0 ? (
            <div key={team.id}>
                <div className="image-flip">
                    <div className="mainflip flip-0">
                        <div className="frontside">
                            <div className="card">
                                <div className="card-body text-left d-flex flex-column justify-content-center">
                                    <p><img className=" img-fluid" src={team.image}alt="card" width="100px" height="100px"/></p>
                                    <h4 className="card-title">{team.name}</h4>
                                    <p className="card-text">{team.job}</p>
                                </div>
                            </div>
                        </div>
                        <div className="backside">
                            <div className="card">
                                <div className="card-body text-left d-flex flex-column justify-content-center">
                                    <h4 className="card-title">{team.name}</h4>
                                    <p className="card-text">{team.about}</p>
                                    <ul className="list-inline">
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blank" href={team.twitter}>
                                                <img src={twitter} alt="twitter" width="20px"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blanks" href={team.github}>
                                                <img src={github} alt="github" width="20px"/>
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="social-icon text-xs-center" target="blankss" href={team.linkedin}>
                                               <img src={linkedin} alt="linkedin" width="20px"/>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ): null
    })
    return(
        <section className="team-wrapper" id="team">
            <h1 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">Team</h1>
            <h2 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.2s">A Community-Based initative</h2>
            <p className="team-paragraph wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">AlphOne is an open-source project designed by a global community of qualified developers, designers and blockchain crytographic traders/enthusiats who have committed to taking the AlphOne and making the decentralized technologies fully accessible to everybody.</p>
            <div className="team-container">
                {teamcards}
            </div>
        </section>
    )
}

export default Team