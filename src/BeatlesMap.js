import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeatlesMarker from "./BeatlesMarker";

const BeatlesMap = withScriptjs(withGoogleMap((props) => {

	const markers = props.filteredSights.map( sight =>
		<BeatlesMarker
	    key={sight.id}
	    sight={sight}
			selectSight={props.selectSight}
			selected={props.selected}
			data={props.data}
			showInfo={props.showInfo}
			error={props.error}
	  />);

	return (
    <GoogleMap
      defaultZoom={13}
      center={props.location}
      >
      {markers}
    </GoogleMap>
	);
}))

export default BeatlesMap;
