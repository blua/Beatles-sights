import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp'

class Sidebar extends Component {

	render() {

		return (
			<div className='list-sights'>
				<div className='list-sights'>
					<input
						className='search-sights'
						type='text'
						placeholder='Search sights'
						value={this.props.query}
						onChange={(event) => this.props.updateQuery(event.target.value)}
					/>
				</div>

				<ol className='sight-list'>
					{this.props.sights.map((sight) => (
						<li key={sight.id} className='sight-list-item'>
						 <div className='sight-details'>
							<p onClick={() => {this.props.selectSight(sight) }} style={sight === this.props.selected ? { backgroundColor: "#00B1E1" } : {}}>{sight.name}</p>
						 </div>
						</li>
					))}
				</ol>

				{this.props.filteredSights.length !== this.props.sights.length ?
					<div className='showing-sights'>
					{this.props.filteredSights.length === 0 ?
					<span>No matching sights</span> :
					<span>Now showing {this.props.filteredSights.length} of {this.props.sights.length} Beatles sights</span>}
					<br /><button onClick={this.props.clearQuery}>Show all</button>
				</div> : null }
			</div>
		)
	}
}

export default Sidebar
