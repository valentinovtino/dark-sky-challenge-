import React from 'react';

export default function CurrentWeather (props) {
    console.log(props)
    // const { latitude, longitude, timezone, time, summary, temperature} = this.props
    return (
        <div className='current-info'>
            <h1>{props.latitude}</h1>
            <h1>{props.longitude}</h1>
            <h1>{props.timezone}</h1>
            <p>{props.time}</p>
            <p>{props.summary}</p>
            <p>{props.temperature}</p>
        </div>
    )
}