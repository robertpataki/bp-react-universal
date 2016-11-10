import React, { Component, PropTypes } from 'react'

import { head } from 'react-isomorphic-render'

import Header from '../components/header'

export default class Layout extends Component
{
	static propTypes =
	{
		children : PropTypes.object.isRequired
	}

	render()
	{
		// Html document metadata

		const title = 'React Universal Boilerplate'
		const description = ''
		const keywords = ''
		const url = ''
		const image = ''

		const meta =
		[
			// <meta charset="utf-8"/>
			{ charset: 'utf-8' },

			// <meta name="..." content="..."/>
			{ 'http-equiv': 'X-UA-Compatible', content:'IE=edge,chrome=1' },
			{ 'http-equiv': 'x-rim-auto-match', content: 'none' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'keywords', content: 'events' },
			{ name: 'robots', content: 'noodp,noydir' },
			{ name: 'skype_toolbar', content: 'skype_toolbar_parser_compatible'},
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=no' },

			// <meta property="..." content="..."/>
			{ name: 'HandheldFriendly', content: 'True' },
			{ name: 'MobileOptimized', content: '320' },
			{ name: 'apple-mobile-web-app-capable', content: 'yes' },

			// Facebook OG
			{ property: 'og:title',       content: title },
			{ property: 'og:site_name',       content: title },
			{ property: 'og:description', content: description },
			{ property: 'og:type',       content: 'website' },
			{ property: 'og:url',       content: url },
			{ property: 'og:image', content: image },
			{ property: 'og:locale',      content: 'en_UK' },

			// Twitter Card
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:site', content: '' },
			{ name: 'twitter:creator', content: '' },
			{ name: 'twitter:title', content: title },
			{ name: 'twitter:description', content: description },
			{ name: 'twitter:image', content: image },
		]

		const markup =
		(
			<div className="l-site">
				{head(title, meta)}

				<Header />

				<div className="l-main" role="main">
					{this.props.children}
				</div>
			</div>
		)

		return markup
	}
}
