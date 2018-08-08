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

		let showingSights = sights
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingSights = sights.filter((sight) => match.test(sight.name) || match.test(sight.keywords))
		} else {
			showingSights = sights
		}

		return (
			<div className='list-sights'>
				<div className='list-sights'>
					<input
						className='search-sights'
						type='text'
						placeholder='Search sights'
						value={query}
						onChange={(event) => this.updateQuery(event.target.value)}
					/>
				</div>

				<ol className='sight-list'>
					{showingSights.map((sight) => (
						<li key={sight.id} className='sight-list-item'>
						 <div className='sight-details'>
							<p onClick={() => {this.props.selectSight(sight.id) }} style={sight.id === this.props.selected ? { backgroundColor: "#00B1E1" } : {}}>{sight.name}</p>
							{console.log('In Apps selected is ' + this.state.selectedSight)}
						 </div>
						</li>
					))}
				</ol>

				{showingSights.length !== sights.length ?
					<div className='showing-sights'>
					{showingSights.length === 0 ?
					<span>No matching sights</span> :
					<span>Now showing {showingSights.length} of {sights.length} Beatles sights</span>}
					<br /><button onClick={this.clearQuery}>Show all</button>
				</div> : null }
			</div>
		)
	}
}

export default Sidebar
