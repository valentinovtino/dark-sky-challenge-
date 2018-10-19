import React, { Component } from 'react';
import api from './helper/api.js';
import Search from './Search.js';
import CurrentWeather from './CurrentWeather.js'
import WelcomePage from './WelcomePage.js';
import './css/App.css';

 export default class App extends Component {
   constructor() {
     super();
     this.state = {
       forecastObj: null, 
       error: null,
       locationChecked: false,
     };

     this.getWeatherApi = this.getWeatherApi.bind(this);
   }

  getWeatherApi(location) {
  
    api.returnWeatherAPI(location)
    .then(json => {
      console.log(json)
      this.setState({ forecastObj: json,
                   error: null, 
                   locationChecked : true  
                  });
    })
    .catch(error => this.setState({ forecastObj: null,
                                    error: '404: Location Not Found',
                                    locationChecked: true
                                  }) 
                                );
  }



  render() {
    return (

      this.state.forecastObj ?
     <div>


      <div className="app-background">
        <h1> DARK SKYES </h1>
        <Search getWeatherApi={this.getWeatherApi}/>
      </div>

      <div className='current'>
        <CurrentWeather 
        latitude = {this.state.forecastObj.latitude}
        longitude = {this.state.forecastObj.longitude}
        timezone = {this.state.forecastObj.timezone}
        time = {this.state.forecastObj.currently.time}
        summary = {this.state.forecastObj.currently.summary}
        temperature = {this.state.forecastObj.currently.temperature}
        />
      </div>
     
      </div>
         : 

         this.state.error ?

        
         <div>
           <WelcomePage getWeatherApi = {this.getWeatherApi}/>
           <p className='error'>Error - City Not Found</p>
         </div>

         :

         <WelcomePage getWeatherApi = {this.getWeatherApi}/>
        
    )  
  }
}


