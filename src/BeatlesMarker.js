import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		infoWindowOpen: false,
		selected: this.props.selected
	}

	closeAllWindows = () => {
		this.setState({infoWindowOpen: false});
	}

	toggleOpen = () => {
	    if (this.state.selected === this.props.sight.id) {
				this.setState({selected: null});
			} else {
				this.setState({selected: this.props.sight.id});
				this.setState({infoWindowOpen: true});
				console.log("After clicking a marker, selected is " + this.state.selected)
			}
	}

  render(){

		/* If I change this.props.selected to this.state.selected in the icon option
		the list clicks stop affecting the markers. But if I keep it as props,
		clicking the marker itself doesn't change the icon
		https://stackoverflow.com/questions/27754101/change-google-maps-marker-icon-when-clicking-on-other
		*/

    return(
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.props.sight.id ? SubmarineIcon : ''}
					onClick={() => this.props.selectSight(this.props.sight.id)}
        >
				 { this.state.infoWindowOpen && this.state.selected === this.props.sight.id === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						<span>{this.props.sight.name}</span>
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
