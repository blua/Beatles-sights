import React from "react";
import { Marker, InfoWindow, Size } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	selectThisSight = () => {
		this.props.selectSight(this.props.sight);
	}

  render(){

    return(
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.props.sight ? SubmarineIcon : 'http://maps.google.com/mapfiles/ms/icons/pink.png'}
					onClick={this.selectThisSight}
					animation={this.props.selected === this.props.sight ? 'DROP' : ''}
        >
				 { this.props.selected === this.props.sight && this.props.showInfo ?
					<InfoWindow defaultPosition={ this.props.location }>
						<div className="info-window">
						{!this.props.error ?
							<div>
								<img className="sight-image" src={"https://igx.4sqi.net/img/general/width960" + this.props.data.response.venue.bestPhoto.suffix} alt={this.props.data.response.venue.name} />
								<br /><h3>{this.props.data.response.venue.name}</h3>
								<a href={this.props.data.response.venue.canonicalUrl} target="_blank">Open on Foursquare</a>
							</div> :
								<span>Sorry, no info about <b>{this.props.sight.name}</b> available at the moment, due to the following error:<br />{this.props.error}</span>
							}
						</div>
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
