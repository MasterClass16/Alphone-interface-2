import React from 'react'

const KeyFeatures= ({card, isClicked}) => {
	const Card = card.map(cards => {
		return cards.id >= 0 ? (
			<div key={cards.id} className={!isClicked ? "light-about-card cards" : "dark-about-card cards"}>
				<div className="w-100 d-flex">
					<img src={cards.image} alt="" className="card-vector"/>
				</div>
					<h2>{cards.heading}</h2>
					<p>{cards.paragraph}</p>
			</div>
		) : null
	})
	return (
		<section className="key-features-wrapper">
			<h1 className="text-left key-features-header my-4">Key Features</h1>
			<div className="card-container">
				{Card}
			</div>
		</section>	
	)
}

export default KeyFeatures