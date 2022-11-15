import React from "react";

export default function Travel(props){
    console.log(props)
    return(
        <div className="travel-place">
            <div className="image-section">
                <img src={require('./images/'+props.imageUrl)}  alt="this is alt"/>
            </div>
            <div className="travel-info">
                <div className="top-info">
                    <span className="country">{props.country}</span>
                    <span className="google_link"><a target="_blank" href={props.googleMapUrl}>View on Google Maps</a></span>
                </div>
                <h1>{props.title}</h1>
                <p className="dates">{props.startDate} - {props.endDate}</p>
                <p>{props.description}</p>
            </div>
        </div>
    )
}