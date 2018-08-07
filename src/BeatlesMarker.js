import React from "react";
import { Marker, InfoWindow, Animation } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		selected: this.props.selected,
		thisMarkerId: this.props.sight.id,
		url: "https://api.foursquare.com/v2/venues/" + this.props.sight.foursquareID + "?client_id=HV4TWNQT0ZP3KJX4HDIQNILSAJO0CZ1EDDIT3L2BT2QMO0B4&client_secret=OLMLCMS3ZXSZSM4UOKQTWIW24WQOYNDXYPI1HUBLJ4GZEMEB&v=20150609",
		data: {}
	}

	componentDidMount() {
		fetch(this.state.url)
			.then(response => response.json())
			.then(data => this.setState({ data }));
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

		console.log("Selected is " + this.props.selected + ", this icon's 4SQ id is " + this.state.url)

    return(
			// Animation currently not working; foursquare quota exceeded; trying to get image src to work
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.state.thisMarkerId ? SubmarineIcon : ''}
					onClick={this.toggleOpen}
					animation={this.props.selected === this.state.thisMarkerId ? 'DROP' : ''}
        >
				 { this.props.selected === this.state.thisMarkerId === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						<div>
							<img src={"https://igx.4sqi.net/img/general/width960/" + this.state.data.response.venue.bestPhoto.suffix} />
							<span>{this.state.data.response.venue.name}</span>
						</div>
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
