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

	render() {

		const {sights} = this.state
		const {query} = this.state

		let showingSights
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
				<BeatlesMapContainer
					sights={showingSights}
					location={ {lat: this.state.latitude, lng: this.state.longitude} }
				/>
			</div>
    );
  }
}

export default App;
