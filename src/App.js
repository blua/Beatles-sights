import React, { Component } from 'react';
import './App.css';
import BeatlesMap from "./BeatlesMap";
import Sidebar from "./Sidebar";
import escapeRegExp from 'escape-string-regexp';
import data from './BeatlesSights';

class App extends Component {

	state = {
		sights: data.beatlesSights,
		latitude: 53.397734,
		longitude: -2.936724,
		selectedSight: {},
		data: {}
	};

	/* Method to select a sight when it is clicked  */
	selectSight = (sight) => {
		if (this.state.selectedSight === sight) {
			this.setState({selectedSight: {}})
		} else {
			this.setState({selectedSight: sight})
			let url = "https://api.foursquare.com/v2/venues/" + this.state.selectedSight.foursquareID + "?client_id=HV4TWNQT0ZP3KJX4HDIQNILSAJO0CZ1EDDIT3L2BT2QMO0B4&client_secret=OLMLCMS3ZXSZSM4UOKQTWIW24WQOYNDXYPI1HUBLJ4GZEMEB&v=20150609"
					fetch(url)
						.then((response) => response.json())
						.then((data) => this.setState({ data: data }));
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
					data={this.state.data}
				/>
			</div>
    );
  }
}

export default App;
