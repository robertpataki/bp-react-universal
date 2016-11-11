import React, { Component, PropTypes } from 'react'

export default class Button extends Component
{
	static propTypes =
	{
		text     : PropTypes.string.isRequired,
		on_click : PropTypes.func.isRequired,
		busy     : PropTypes.bool
	}

	render()
	{
		const { busy, on_click, text, className } = this.props

		const markup =
		(
			<span>
				<span className="spinner"></span>
				<button disabled={busy} onClick={on_click} className={ className }>{text}</button>
			</span>
		)

		return markup
	}
}
