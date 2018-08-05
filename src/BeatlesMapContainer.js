import React from "react";
import BeatlesMap from "./BeatlesMap";

export default class BeatlesMapContainer extends React.Component {

	render() {

		console.log('In BMC selected is ' + this.props.selected)

		return (
			<BeatlesMap
				sights={this.props.sights}
				location={this.props.location}
				selectSight={this.props.selectSight}
				selected={this.props.selected}
				googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyDyRtaH9hDTxrFTNaC_de76xgGsoXrvecY&v=3.exp&libraries=geometry,drawing,places`}
				loadingElement={<div style={{ height: `100%` }} />}
				containerElement={<div className="map-container" />}
				mapElement={<div className="map" />}
			/>
		);
	}
}
