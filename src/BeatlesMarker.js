import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	selectThisSight = () => {
		this.props.selectSight(this.props.sight);
	}

  render(){

		console.log("showInfo: " + this.props.showInfo + ", error: " + this.props.error)

    return(
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.props.sight ? SubmarineIcon : ''}
					onClick={this.selectThisSight}
					animation={this.props.selected === this.props.sight ? 'DROP' : ''}
        >
				 { this.props.selected === this.props.sight ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						<div>
						{this.props.showInfo && !this.props.error ?
							<div>
								<img src={"https://igx.4sqi.net/img/general/width960" + this.props.data.response.venue.bestPhoto.suffix} alt={this.props.data.response.venue.name} width="300px"/>
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
