import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import { Link }							from 'react-router';

export default class Not_found extends Component
{
	render()
	{
		const pic = require('../../../assets/images/404.jpg');
		const markup =
		(
			<section className="l-content not-found-page">
				{title("Page not found")}

				<div className="grid">
					<div className="column">
						<h1 className="heading">Where can it be?</h1>
					</div>
				</div>

				<div className="grid">
					<div className="column">
						<img src={ pic } alt="Travolta is confused (Pulp Fiction)" />
					</div>
				</div>

				<div className="grid">
					<div className="column ta-center">
						<Link to="/" className="link">Go to the Home page</Link>
					</div>
				</div>
			</section>
		)

		return markup
	}
}
