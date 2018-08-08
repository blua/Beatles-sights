import React, { Component } from 'react';
import './App.css';
import BeatlesMap from "./BeatlesMap";
import Sidebar from "./Sidebar";
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

	/* Method to select a sight when it is clicked  */
	selectSight = (id) => {
		if (this.state.selectedSight === id) {
			this.setState({selectedSight: ''})
		} else {
			this.setState({selectedSight: id})
		}
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
					<Sidebar
						sights={showingSights}
						selectSight={this.selectSight}
						selected={this.state.selectedSight}
					/>
				</div>
				<BeatlesMap
					sights={showingSights}
					location={ {lat: this.state.latitude, lng: this.state.longitude}}
					selectSight={this.selectSight}
					selected={this.state.selectedSight}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyRtaH9hDTxrFTNaC_de76xgGsoXrvecY&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div className="map-container" />}
					mapElement={<div className="map" />}
				/>
			</div>
    );
  }
}

export default App;
