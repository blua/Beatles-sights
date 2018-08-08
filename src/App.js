import React, { Component } from 'react';
import './App.css';
import BeatlesMapContainer from "./BeatlesMapContainer";
import escapeRegExp from 'escape-string-regexp';

class App extends Component {

	state = {
		sights: [{
			id: "paul_child",
			name: "Paul's childhood home",
			location: {lat: 53.3697068, lng: -2.900069},
			foursquareID: "4c4854ad76d72d7f3b00404d",
			keywords: ["mccartney", "macca", "fortlin road"]
		},{
			id: "john_child",
			name: "John's childhood home",
			location: {lat: 53.37727, lng: -2.8835431},
			foursquareID: "4c1a117e95e89521e42557e7",
			keywords: ["lennon", "mendips", "menlove avenue"]
		},{
			id: "penny",
			name: "Penny Lane",
			location: {lat: 53.3889678, lng: -2.9155062},
			foursquareID: "4b9e5de8f964a5205fdd36e3",
			keywords: ["roundabout", "nurse", "barber", "banker", "fireman"]
		}],
		latitude: 53.397734,
		longitude: -2.936724,
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
			showingSights = sights.filter((sight) => match.test(sight.name) || match.test(sight.keywords))
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
								<p onClick={() => {this.selectSight(sight.id) }} style={sight.id === this.state.selectedSight ? { backgroundColor: "#00B1E1" } : {}}>{sight.name}</p>
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
