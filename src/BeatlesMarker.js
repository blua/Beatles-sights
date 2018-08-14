import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	selectThisSight = () => {
		this.props.selectSight(this.props.sight);
	}

	render(){

		const {sight, selected, data} = this.props

		return(
	    <Marker
	      position={sight.location}
	      icon={selected === sight ? SubmarineIcon : "http://maps.google.com/mapfiles/ms/icons/lightblue.png"}
				onClick={this.selectThisSight}
	    >
				{selected === sight && this.props.showInfo ?
					<InfoWindow defaultPosition={ sight.location }>
						<div className="info-window">
							{!this.props.error ?
								<div>
									<img className="sight-image" src={"https://igx.4sqi.net/img/general/width960" + data.response.venue.bestPhoto.suffix} alt={data.response.venue.name} />
									<p className="sight-name">{data.response.venue.name}</p>
									<p className="sight-description">{sight.description}</p>
									<br /><a href={data.response.venue.canonicalUrl} target="_blank">Open on Foursquare</a>
								</div> :
									<span>Sorry, no info about <b>{sight.name}</b> available at the moment, due to the following error:<br />{this.props.error}</span>
							}
						</div>
					</InfoWindow> : null
				}
	    </Marker>
		);
  }
}
