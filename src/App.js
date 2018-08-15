import React, { Component } from "react";
import "./App.css";
import BeatlesMap from "./BeatlesMap";
import Sidebar from "./Sidebar";
import escapeRegExp from "escape-string-regexp";
import sights from "./BeatlesSights";

class App extends Component {

	state = {
		windowWidth: window.innerWidth,
    sidebarOpen: window.innerWidth > 900,
		sights: sights.beatlesSights,
		latitude: 53.397734,
		longitude: -2.936724,
		query: "",
		filteredSights: sights.beatlesSights,
		selectedSight: {},
		data: {},
		showInfo: false,
		error: ""
	};

	/* Every time the window is resized, check width to see if the sidebar
	should be open or closed. To do this, I followed the tutorial on
	https://www.davidmeents.com/creating-a-collapsible-navigation-menu-in-react-js/ */

	handleResize = () => {
		this.setState({windowWidth: window.innerWidth});
		this.state.windowWidth > 900 ? this.openSidebar() : this.closeSidebar();
	}

	componentDidMount() {
		window.addEventListener("resize", () => this.handleResize());
	}

	componentWillUnmount() {
		window.removeEventListener("resize", () => this.handleResize());
	}

	/* Methods to open and close sidebar, either when clicked or
	due to window resize */
	openSidebar = () => {
		document.getElementById("sidebar").className = "sidebar showing";
		this.setState({sidebarOpen: true});
	}

	closeSidebar = () => {
		document.getElementById("sidebar").className = "sidebar hidden";
		this.setState({sidebarOpen: false});
	}

	toggleSidebar = () => {
		this.state.sidebarOpen ? this.closeSidebar() : this.openSidebar();
	}

	/* Filter the sights when user enters a query. This affects both sidebar and map. */
	filterSights = (query) => {
		this.setState({query: query.trim()})
		if (query) {
			const match = new RegExp(escapeRegExp(query), "i")
			this.setState({filteredSights: this.state.sights.filter((sight) =>
				match.test(sight.name) || match.test(sight.description) || match.test(sight.keywords))})
		} else {
			this.setState({filteredSights: this.state.sights})
		}
	}

	clearQuery = () => {
		this.setState({query: "", filteredSights: this.state.sights})
	}

	/* Select a sight when it is clicked and open the infowindow.
	If the screen is small, re-center the map on the chosen location
	(so the infowindow won't appear offscreen) and close the sidebar */
	selectSight = (sight) => {
		if (this.state.selectedSight === sight) {
			this.setState({selectedSight: {}})
		} else {
			this.setState({selectedSight: sight, showInfo: false})
			this.requestFSQ(sight);
 		  if (this.state.windowWidth <= 600) {
				this.setState({latitude: sight.location.lat, longitude: sight.location.lng});
				this.closeSidebar();
			}
		}
	}

	/* Fetch data from the Foursquare API and open the infowindow with it inside.
	Since fetch only fails on network errors, I added a step to check if
	the venue data is retrieved, and throw an error if it isn't */
	requestFSQ = (sight) => {
	let url = "https://api.foursquare.com/v2/venues/" + sight.foursquareID + "?client_id=HV4TWNQT0ZP3KJX4HDIQNILSAJO0CZ1EDDIT3L2BT2QMO0B4&client_secret=OLMLCMS3ZXSZSM4UOKQTWIW24WQOYNDXYPI1HUBLJ4GZEMEB&v=20150609"
			fetch(url)
				.then((response) => response.json())
				.catch(() => this.setState({ error: "Network error" }))
				.then((data) => {
					if (data.response.venue) {
						this.setState({ data: data })
					} else {
						this.setState({ error: data.meta.errorDetail })}})
				.then(() => this.setState({showInfo: true }))
	}

	checkFocus = () => document.addEventListener('focusin', function() {console.log(document.activeElement)}, false)

	render() {

this.checkFocus()
		return (
			/* Display smaller title and don't open sidebar if window is small.
			I have decided to assign tabIndexes to some elements, as I really think
			jumping straight to the list-toggle and then the searchbox and the list
			is the easiest way to navigate through the site */
			<div className="App">
				<div className="App-header">
					<h1 className="App-title">
						{this.state.windowWidth > 600 ? "Beatles Sights in Liverpool" : "Beatles in L'pool"}
					</h1>
						<button className="list-toggle" onClick={this.toggleSidebar} tabIndex="1">
							{this.state.sidebarOpen ? "Hide sight list" : "Show sight list"}
						</button>
				</div>
				<div className="wrapper">
					<BeatlesMap
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
					<div className={this.state.sidebarOpen ? "sidebar showing" : "sidebar hidden"} id="sidebar">
						<Sidebar
							sights={this.state.sights}
							filteredSights={this.state.filteredSights}
							query={this.state.query}
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
