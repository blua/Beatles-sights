import React, { Component } from 'react';
import './App.css';
import BeatlesMap from "./BeatlesMap";
import Sidebar from "./Sidebar";
import escapeRegExp from 'escape-string-regexp';
import data from './BeatlesSights';

class App extends Component {

	state = {
		windowWidth: window.innerWidth,
    sidebarOpen: window.innerWidth > 900,
		sights: data.beatlesSights,
		latitude: 53.397734,
		longitude: -2.936724,
		query: '',
		filteredSights: data.beatlesSights,
		selectedSight: {},
		data: {},
		showInfo: false,
		error: ''
	};

	handleResize = () => {
		this.setState({windowWidth: window.innerWidth});
		this.state.windowWidth > 900 ? this.openSidebar() : this.closeSidebar();
	}

	componentDidMount() {
		window.addEventListener('resize', () => this.handleResize());
	}

	componentWillUnmount() {
		window.removeEventListener('resize', () => this.handleResize());
	}

	openSidebar = () => {
		document.getElementById("sidebar").className = "sidebar showing";
    // document.getElementById("App").style.marginLeft = "400px";
		this.setState({sidebarOpen: true});
	}

	closeSidebar = () => {
		document.getElementById("sidebar").className = "sidebar hidden";
		this.setState({sidebarOpen: false});
	}

	toggleSidebar = () => {
		this.state.sidebarOpen ? this.closeSidebar() : this.openSidebar();
	}

	updateQuery = (query) => {
		this.setState({query: query.trim()})
		if (query) {
			const match = new RegExp(escapeRegExp(query), 'i')
			this.setState({filteredSights: this.state.sights.filter((sight) => match.test(sight.name) || match.test(sight.keywords))})
		} else {
			this.setState({filteredSights: this.state.sights})
		}
	}

	clearQuery = () => {
		this.setState({query: '', filteredSights: this.state.sights})
		console.log("query cleared")
	}

	/* Method to select a sight when it is clicked and open the InfoWindow with
	its data or an error message. Since fetch only fails on network errors,
	I added a step to check if the venue data is retrieved, and throw an error
	if it isn't */
	selectSight = (sight) => {
		if (this.state.selectedSight === sight) {
			this.setState({selectedSight: {}})
			console.log("sight is now: " + this.state.selectedSight.id)
		} else {
			this.setState({selectedSight: sight})
			console.log("sight is now... " + JSON.stringify(this.state.selectedSight))
			let url = "https://api.foursquare.com/v2/venues/" + sight.foursquareID + "?client_id=HV4TWNQT0ZP3KJX4HDIQNILSAJO0CZ1EDDIT3L2BT2QMO0B4&client_secret=OLMLCMS3ZXSZSM4UOKQTWIW24WQOYNDXYPI1HUBLJ4GZEMEB&v=20150609"
			console.log("url is now... " + url)
					fetch(url)
						.then((response) => response.json())
						.catch(() => this.setState({ error: 'Network error' }))
						.then((data) => data.response.venue ?
							this.setState({ data: data })
							: this.setState({ error: data.meta.errorDetail }))
						.then(() => this.setState({showInfo: true }));
		}
	}

	render() {

		console.log(this.state.windowWidth)

    return (
			<div className="App" id="App">

				<div className="App-header">

					<div className="App-title">Beatles Sights in Liverpool</div>

					<div className="list-toggle" onClick={this.toggleSidebar}>
						{this.state.sidebarOpen ? "Hide sight list" : "Show sight list"}
					</div>
			</div>

				<div className="wrapper">

				<BeatlesMap
					sights={this.state.sights}
					filteredSights={this.state.filteredSights}
					location={ {lat: this.state.latitude, lng: this.state.longitude}}
					selectSight={this.selectSight}
					selected={this.state.selectedSight}
					googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyRtaH9hDTxrFTNaC_de76xgGsoXrvecY&v=3.exp&libraries=geometry,drawing,places`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div className="map-container" />}
					mapElement={<div className="map" />}
					data={this.state.data}
					showInfo={this.state.showInfo}
					error={this.state.error}
				/>

				<div className="sidebar showing" id="sidebar">
					<Sidebar
						sights={this.state.sights}
						filteredSights={this.state.filteredSights}
						query={this.state.query}
						updateQuery={this.updateQuery}
						clearQuery={this.clearQuery}
						filterSights={this.filterSights}
						selectSight={this.selectSight}
						selected={this.state.selectedSight}
					/>
				</div>

			</div>
		</div>
    );
  }
}

export default App;
