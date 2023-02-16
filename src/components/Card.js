import React from "react";

import locationLogo from "../images/location-logo.png"

export default function Card(props) {
    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL + props.imageUrl} alt="" className="card--image" />
            <div className="card--other">
            <div className="card--location">
                <img src={locationLogo} alt="" className="card--location--logo" />
                <p className="card--location--name">{props.location}</p>
                <a href={props.googleMapUrl} className="card--location--link" target="_blank" rel="noreferrer">View on Google Maps</a>
            </div>
            <div className="card--content">
                <h2 className="card--content--title">{props.title}</h2>
                <p className="card--content--date">{props.startDate} - {props.endDate}</p>
                <div className="card--content--description">
                    <p className="card--content--description--para">
                        {props.description}
                    </p>
                </div>
                
            </div>
            </div>

        </div>
    )
}