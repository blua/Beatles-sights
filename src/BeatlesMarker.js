import React from "react";
import { Marker, InfoWindow } from "react-google-maps";
import SubmarineIcon from "./submarine.png";

export default class BeatlesMarker extends React.Component {

	state = {
		selected: this.props.selected,
	}

	selectThisSight = () => {
		this.props.selectSight(this.props.sight);
	}

  render(){

		/* I have managed to move fetch to the click, but it can't reach
		the contents of data when it's an error. For example, I can't add
		" due to the following error: <em>{this.props.data.meta.errorDetail}</em>"
		in the error message. But if I JSON.stringify it, I can see that the data
		is there, so idk what the problem is.
		*/

    return(
        <Marker
          position={this.props.location}
          icon={this.props.selected === this.props.sight ? SubmarineIcon : ''}
					onClick={this.selectThisSight}
					animation={this.props.selected === this.props.sight ? 'DROP' : ''}
        >

				 { this.props.selected === this.props.sight === true ?
					<InfoWindow maxWidth={800} defaultPosition={ this.props.location }>
						{this.props.data > 2 ?
							<div>
								<img src={"https://igx.4sqi.net/img/general/width960" + this.props.data.response.venue.bestPhoto.suffix} width="300px"/>
								<br /><h3>{this.props.data.response.venue.name}</h3>
								<a href={this.props.data.response.venue.canonicalUrl} target="_blank">Open on Foursquare</a>
							</div> :
								<span>Sorry, no info about <b>{this.props.sight.name}</b> available at the moment</span>
							}
					</InfoWindow> : null
				}
        </Marker>
    );
  }
}
