import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeatlesMarker from "./BeatlesMarker";

const BeatlesMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.filteredSights.map( sight =>
		<BeatlesMarker
                    key={sight.id}
                    sight={sight}
                    location={sight.location}
										selectSight={props.selectSight}
										selected={props.selected}
										closeMarkers={props.closeOtherMarkers}
										activeMarker={sight.id === props.activeMarker ? true : false}
										showInfo={false}
										data={props.data}
										showInfo={props.showInfo}
                  />);

  return (
      <GoogleMap
        defaultZoom={13}
        center={props.location}
        >
        {markers}
      </GoogleMap>
  );
  }
))

export default BeatlesMap;
