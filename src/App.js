import React, { Component } from 'react';
import './App.css';
import BeatlesMapContainer from "./BeatlesMapContainer";

class App extends Component {

	state = {
		sights: [],
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
				<BeatlesMapContainer
					sights={this.state.sights}
					location={ {lat: this.state.latitude, lng: this.state.longitude} }
				/>
      </div>
    );
  }
}

export default App;
