import React from 'react';
import Search from './Search.js';
import './css/WelcomePage.css';

export default function WelcomePage(props) {
    return (
        <header className='front-page'>
            <h1 className='title'> Dark Skies </h1>
            <div className='submit-info'>
                <Search getWeatherApi = {props.getWeatherApi} />
            </div>
        </header>
    );
}