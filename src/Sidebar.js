import React, { Component } from 'react';

class Sidebar extends Component {

	render() {

		return (
			<div className='list-sights'>
					<input
						className='search-sights'
						type='text'
						placeholder='Search sights'
						value={this.props.query}
						onChange={(event) => this.props.updateQuery(event.target.value)}
					/>
				<ul className='sight-list'>
					{this.props.filteredSights.map((sight) => (
						<li key={sight.id}>
							<p onClick={() => {this.props.selectSight(sight)}} className={sight === this.props.selected ? 'sight-list-selected' : 'sight-list-item'}>{sight.name}</p>
						</li>
					))}
				</ul>

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
