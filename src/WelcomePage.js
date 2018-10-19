import React from 'react';
import Search from './Search.js';

export default function WelcomePage(props) {
    return (
        <header className='front-page'>
            <h1> Dark Skies </h1>
            <div className='submit-info'>
                <Search getWeatherApi = {props.getWeatherApi} />
            </div>
        </header>
    );
}