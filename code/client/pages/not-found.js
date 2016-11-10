import React, { Component } from 'react'
import { title }            from 'react-isomorphic-render'
import { Link }							from 'react-router';

export default class Not_found extends Component
{
	render()
	{
		const markup =
		(
			<section className="l-content">
				{title("Page not found")}

				<div className="row">
					<div className="small-centered small-11 medium-6 large-4">
						<h1 className="heading">404 - Page not found</h1>

						<Link to="/">Go to the Home page</Link>
					</div>
				</div>
			</section>
		)

		return markup
	}
}