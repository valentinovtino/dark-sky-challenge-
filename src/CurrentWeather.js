import React from 'react';
import './css/CurrentWeather.css';

export default function CurrentWeather (props) {
    return (
        <div className='current-info'>
            <div className='location-info'>
                <h2>Latitude: {props.latitude}° N</h2>
                <h2>Longitude: {props.longitude}° E</h2>
                <h2>TimeZone: {props.timezone}</h2>
                <p>Time: {props.time}</p>
                <p>Summary: {props.summary}</p>
                <p>Temperature: {props.temperature}°</p>
            </div>
        </div>
    )
}