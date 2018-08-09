import React from "react";
import { Marker, InfoWindow, Animation } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		selected: this.props.selected,
		thisSightId: this.props.sight.id,
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
		this.props.selectSight(this.state.thisSightId);
	    if (this.state.selected) {
				this.setState({infoWindowOpen: true});
			}
	}

  render(){

		console.log("Selected is " + this.props.selected + ", this icon's 4SQ id is " + this.state.url)

    return(
			// Animation currently not working; foursquare quota exceeded; trying to get image src to work
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.state.thisSightId ? SubmarineIcon : ''}
					onClick={this.toggleOpen}
					animation={this.props.selected === this.state.thisSightId ? 'DROP' : ''}
        >
				 { this.props.selected === this.state.thisSightId === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						{this.state.data.response.venue ?
							<div>
								<img src={"https://igx.4sqi.net/img/general/width960" + this.state.data.response.venue.bestPhoto.suffix} width="300px"/>
								<br /><h3>{this.state.data.response.venue.name}</h3>
								<a href={this.state.data.response.venue.canonicalUrl} target="_blank">Open on Foursquare</a>
							</div> :
								<span>Sorry, no info about <b>{this.props.sight.name}</b> available at the moment due to the following error: <em>{this.state.data.meta.errorDetail}</em></span>
							}
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
