import React, { Component, PropTypes } from 'react'

import { title }   from 'react-isomorphic-render'

export default class Page extends Component
{
	render()
	{
		const photo = require('../../../assets/images/ganesha-climbs.jpg')

		const markup =
		(
			<section className="l-content home-page">
				{title("Home")}

				<div className="grid grid--medium">
					<div className="column column--light">
						<h1 className="heading">Home Page</h1>
						<img src={ photo } className="home-page__photo" />
						<p>Image credit</p>
					</div>
				</div>

				<div className="grid grid--large">
					<div className="column"><p className="fw-bold">Appropriately administrate quality experiences through frictionless processes. Rapidiously enhance cross-media leadership skills for market positioning information. Efficiently foster functional processes after innovative applications. Assertively reinvent.</p></div>
				</div>

				<div className="grid grid--large">
					<div className="column column--light"><p>Synergistically re-engineer global communities without multifunctional process improvements.</p></div>
					<div className="column"><p>Authoritatively underwhelm cross-unit synergy after cross-media infrastructures. Assertively disintermediate adaptive leadership vis-a-vis client-based e-business. Quickly unleash extensive "outside the box" thinking with standards compliant markets.</p></div>
				</div>
			</section>
		)

		return markup
	}
}
