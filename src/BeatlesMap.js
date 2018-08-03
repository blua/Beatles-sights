import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import BeatlesMarker from "./BeatlesMarker";

const BeatlesMap = withScriptjs(withGoogleMap((props) =>{

  const markers = props.sights.map( sight =>
		<BeatlesMarker
                    key={sight.id}
                    sight={sight}
                    location={sight.location}
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
