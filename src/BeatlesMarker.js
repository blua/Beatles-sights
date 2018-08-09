import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		selected: this.props.selected,
	}

	toggleOpen = () => {
		this.props.selectSight(this.props.sight);
	}

  render(){

    return(
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.props.sight ? SubmarineIcon : ''}
					onClick={this.toggleOpen}
					animation={this.props.selected === this.props.sight ? 'DROP' : ''}
        >
				 { this.props.selected === this.props.sight === true ?
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
