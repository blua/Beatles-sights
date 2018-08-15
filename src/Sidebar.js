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
					role="searchbox"
					aria-label="Search Beatles sights"
				/>
				{/* Used buttons in the list for better accessibility */}
				<ul>
					{orderedSights.map((sight) => (
						<li key={sight.id}>
							<button onClick={() => {this.props.selectSight(sight)}} className={sight === this.props.selected ? "sight-list-selected" : "sight-list-normal"}>{sight.name}</button>
						</li>
					))}
				</ul>
				{/*
					If list is filtered, indicate how many sights are showing and a button
					to show them all again
				*/}
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
