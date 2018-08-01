import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeatlesMarker from "./BeatlesMarker";

const BeatlesMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.sights.map( sight =>
		<BeatlesMarker
                    key={sight.uid}
                    sight={sight}
                    location={{lat: 0.0, lng: 0.0}}
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
