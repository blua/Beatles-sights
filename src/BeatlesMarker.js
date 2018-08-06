import React from "react";
import { Marker, InfoWindow, Animation } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		selected: this.props.selected,
		thisMarkerId: this.props.sight.id
	}

	closeAllWindows = () => {
		this.setState({infoWindowOpen: false});
	}

	toggleOpen = () => {
	    if (this.props.selected === this.state.thisMarkerId) {
				console.log("already selected")
				this.props.selectSight('');
			} else {
				console.log("not selected yet")
				this.props.selectSight(this.state.thisMarkerId);
				this.setState({infoWindowOpen: true});
				console.log("After clicking a marker, selected is " + this.props.selected)
			}
	}

  render(){

		/* If I change this.props.selected to this.state.selected in the icon option
		the list clicks stop affecting the markers. But if I keep it as props,
		clicking the marker itself doesn't change the icon
		https://stackoverflow.com/questions/27754101/change-google-maps-marker-icon-when-clicking-on-other
		*/

		console.log("Selected is " + this.props.selected + ", this icon's id is " + this.props.sight.id)

    return(
			// Animation currently not working
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.state.thisMarkerId ? SubmarineIcon : ''}
					onClick={this.toggleOpen}
					animation={this.props.selected === this.state.thisMarkerId ? 'DROP' : ''}
        >
				 { this.props.selected === this.state.thisMarkerId === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						<span>{this.props.sight.name}</span>
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
