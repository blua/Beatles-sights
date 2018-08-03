import React, { Component } from 'react';
import './App.css';
import BeatlesMapContainer from "./BeatlesMapContainer";
import Sidebar from "./Sidebar";

class App extends Component {

	state = {
		sights: [{
			id: "paul_child",
			name: "Paul's childhood home",
			location: {lat: 53.3697068, lng: -2.900069}
		},{
			id: "john_child",
			name: "John's childhood home",
			location: ""
		},{
			id: "penny",
			name: "Penny Lane",
			location:""
		}],
		latitude: 53.397734,
		longitude: -2.936724,
		location: "",
		keyword: "",
		showMoreOptions: false,
		distance: 10,
		showSightDetails: false,
		selectedSight: ""
	};

	render() {

    return (
      <div className="App">
				<div className="sidebar">
					<Sidebar
						sights={this.state.sights}
					/>
				</div>
				<BeatlesMapContainer
					sights={this.state.sights}
					location={ {lat: this.state.latitude, lng: this.state.longitude} }
				/>
      </div>
    );
  }
}

export default App;
