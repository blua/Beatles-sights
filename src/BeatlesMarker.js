import React from "react";
import { Marker } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={SubmarineIcon}
        >
        </Marker>
    );
  }
}
