import React from "react";
import BeatlesMap from "./BeatlesMap";

export default class BeatlesMapContainer extends React.Component {

	render() {
		return (
			<BeatlesMap
				sights={this.props.sights}
				location={this.props.location}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyRtaH9hDTxrFTNaC_de76xgGsoXrvecY&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div className="map-container" />}
				mapElement={<div className="map" />}
			/>
		);
	}
}
