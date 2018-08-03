import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		infoWindowOpen: false,
		activeMarker: null
	}

	closeAllWindows = () => {
		this.setState({infoWindowOpen: false});
	}

	toggleOpen = () => {
	    if (this.state.activeMarker === this.props.sight.id) {
				this.setState({activeMarker: null});
			} else {
				this.setState({activeMarker: this.props.sight.id});
				this.setState({infoWindowOpen: true});
				console.log(this.state.activeMarker, this.state.infoWindowOpen)
			}
	}

  render(){
    return(
        <Marker
          position={this.props.location}
          icon={SubmarineIcon}
					onClick={this.toggleOpen}
        >
				 { this.state.infoWindowOpen && this.state.activeMarker === this.props.sight.id === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						<span>{this.props.sight.name}</span>
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
