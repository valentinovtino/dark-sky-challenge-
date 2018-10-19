import React from 'react';

export default function CurrentWeather (props) {
    return (
        <div className='current-info'>
            <h1>Latitude: {props.latitude}</h1>
            <h1>Longitude: {props.longitude}</h1>
            <h1>TimeZone: {props.timezone}</h1>
            <p>Time: {props.time}</p>
            <p>Summary: {props.summary}</p>
            <p>Temperature: {props.temperature}</p>
        </div>
    )
}