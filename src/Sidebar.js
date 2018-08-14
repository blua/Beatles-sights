import React, { Component } from "react";
import sortBy from "sort-by"

class Sidebar extends Component {

	render() {

		const orderedSights = this.props.filteredSights.sort(sortBy("name"))

		return (
			<div className="sight-list">
				<input
					className="search-sights"
					type="text"
					placeholder="Search Beatles sights"
					value={this.props.query}
					onChange={(event) => this.props.filterSights(event.target.value)}
				/>
				<ul>
					{orderedSights.map((sight) => (
						<li key={sight.id}>
							<p onClick={() => {this.props.selectSight(sight)}} className={sight === this.props.selected ? "sight-list-selected" : null}>{sight.name}</p>
						</li>
					))}
				</ul>

				{this.props.filteredSights.length !== this.props.sights.length ?
					<div className="showing-sights">
						{this.props.filteredSights.length === 0 ?
							<span>No matching sights</span> :
							<span>Now showing {this.props.filteredSights.length} of {this.props.sights.length} Beatles sights</span>
						}
						<br /><button onClick={this.props.clearQuery}>Show all</button>
					</div> : null
				}
			</div>
		)
	}
}

export default Sidebar
