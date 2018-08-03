import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class Sidebar extends Component {

	state = {
		query: ''
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query: ''})
	}

	render() {

		const {sights} = this.props
		const {query} = this.state

		let showingSights
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingSights = sights.filter((sight) => match.test(sight.name))
		} else {
			showingSights = sights
		}

		return (
			<div className='list-sights'>
				<div className='list-sights-top'>
					<input
						className='search-sights'
						type='text'
						placeholder='Search sights'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>

				{showingSights.length !== sights.length && (
					<div className='showing-sights'>
					<span>Now showing {showingSights.length} of {sights.length} total</span>
					<button onClick={this.clearQuery}>Show all</button>
					</div>
				)}


				<ol className='sight-list'>
					{showingSights.map((sight) => (
						<li key={sight.id} className='sight-list-item'>
						 <div className='sight-details'>
							<p>{sight.name}</p>
						 </div>
						</li>
					))}
				</ol>
			</div>
		)
	}
}

export default Sidebar
