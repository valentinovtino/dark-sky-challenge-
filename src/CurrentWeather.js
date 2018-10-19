import React from 'react';

export default function CurrentWeather (props) {
    const { latitude, longitude, timezone, time, summary, temperature} = this.props
    return (
        <div className='current-info'>
            <h1>{latitude}</h1>
            <h1>{longitude}</h1>
            <h1>{timezone}</h1>
            <p>{time}</p>
            <p>{summary}</p>
            <p>{temperature}</p>
        </div>
    )
}