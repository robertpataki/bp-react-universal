import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators as bind_action_creators } from 'redux'

import { get as get_users, add as add_user, remove as delete_user, dismiss_adding_error } from '../actions/users'
import Button from '../components/button'

import { title }   from 'react-isomorphic-render'
import { preload } from 'react-isomorphic-render/redux'

@preload(({ dispatch, getState }) => dispatch(get_users()))
@connect
(
	store =>
	({
		users         : store.users.users,
		loading       : store.users.loading,
		loaded        : store.users.loaded,
		stale         : store.users.stale,
		loading_error : store.users.loading_error,
		adding_error  : store.users.adding_error
	}),
	dispatch => bind_action_creators({ get_users, add_user, delete_user, dismiss_adding_error }, dispatch)
)
export default class Page extends Component
{
	static propTypes =
	{
		get_users     : PropTypes.func.isRequired,
		add_user      : PropTypes.func.isRequired,
		delete_user   : PropTypes.func.isRequired,
		users         : PropTypes.array.isRequired,
		loading       : PropTypes.bool,
		loaded        : PropTypes.bool,
		stale         : PropTypes.bool,
		loading_error : PropTypes.object,
		adding_error  : PropTypes.object
	}

	static contextTypes =
	{
		store : PropTypes.object.isRequired
	}

	constructor(props)
	{
		super(props)

		this.refresh     = this.refresh.bind(this)
		this.add_user    = this.add_user.bind(this)
		this.delete_user = this.delete_user.bind(this)
	}

	componentWillReceiveProps(next_props)
	{
		if (!this.props.stale && next_props.stale)
		{
			this.refresh()
		}

		if (next_props.adding_error)
		{
			alert('Failed to add the user')

			this.props.dismiss_adding_error()
		}
	}

	render()
	{
		const { error, loaded, users } = this.props

		const markup =
		(
			<section className="l-content">
				{title("Simple REST API example")}

				<div className="row">
					<div className="small-centered small-11 medium-6 large-6">
						<div>
							<p>This is an example of REST API usage with no database persistence</p>

							{this.render_users(error, loaded, users)}
						</div>
					</div>
				</div>
			</section>
		)

		return markup
	}

	render_users(error, loaded, users)
	{
		if (error)
		{
			const markup =
			(
				<div>
					{'Failed to load the list of users'}

					{/* error.stack || error */}

					<button onClick={this.refresh}>Try again</button>
				</div>
			)

			return markup
		}

		if (!loaded)
		{
			return <div>Loading users</div>
		}

		if (users.is_empty())
		{
			const markup =
			(
				<div>
					No users

					<button onClick={this.add_user}>Add user</button>

					<button onClick={this.refresh}>Refresh</button>
				</div>
			)

			return markup
		}

		const markup =
		(
			<div>
				<span>Users</span>

				<button onClick={this.add_user}>Add user</button>

				<button onClick={this.refresh}>Refresh</button>

				<div>
					<ul>
						{users.map(user =>
						{
							return <li key={user.id}>
								<span>{user.id}</span>

								<span>{user.name}</span>

								<Button
									busy={this.props.deleting}
									on_click={event => this.delete_user(user.id)}
									text="delete user"/>
							</li>
						})}
					</ul>
				</div>
			</div>
		)

		return markup
	}

	refresh()
	{
		this.props.get_users()
	}

	add_user()
	{
		const name = prompt(`Enter user's name`)

		if (!name)
		{
			return
		}

		this.props.add_user({ name: name })
	}

	delete_user(id)
	{
		this.props.delete_user(id)
	}
}
