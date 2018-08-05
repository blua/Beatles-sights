import React, { Component } from 'react';
import './App.css';
import BeatlesMapContainer from "./BeatlesMapContainer";
import escapeRegExp from 'escape-string-regexp';

class App extends Component {

	state = {
		sights: [{
			id: "paul_child",
			name: "Paul's childhood home",
			location: {lat: 53.3697068, lng: -2.900069}
		},{
			id: "john_child",
			name: "John's childhood home",
			location: {lat: 53.37727, lng: -2.8835431}
		},{
			id: "penny",
			name: "Penny Lane",
			location: {lat: 53.3889678, lng: -2.9155062}
		}],
		latitude: 53.397734,
		longitude: -2.936724,
		location: "",
		keyword: "",
		showMoreOptions: false,
		distance: 10,
		showSightDetails: false,
		selectedSight: "",
		query:  ""
	};

	updateQuery = (query) => {
		this.setState({query: query.trim()})
	}

	clearQuery = () => {
		this.setState({query: ''})
	}

	/* Method to select a sight when it is clicked in the sidebar list */
	selectSight = (id) => {
		this.setState({selectedSight: id})
	}

	render() {

		const {sights} = this.state
		const {query} = this.state

		let showingSights = sights
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			showingSights = sights.filter((sight) => match.test(sight.name))
		} else {
			showingSights = sights
		}

    return (
			<div className="App">
				<div className="sidebar">
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
								<p onClick={() => {this.selectSight(sight.id) }}>{sight.name}</p>
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
				<BeatlesMapContainer
					sights={showingSights}
					location={ {lat: this.state.latitude, lng: this.state.longitude}}
					selectSight={this.selectSight}
					selected={this.state.selectedSight}
				/>
			</div>
    );
  }
}

export default App;
