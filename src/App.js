import React, { Component } from 'react';
import api from './helper/api.js';
import Search from './Search.js';

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
                   locationChecked: true  
                  });
    })
    
  }


  render() {
    return (

      // this.state.forecastObj ?
      <div className="app-background">
        <h1> DARK SKYES </h1>
        <Search getWeatherApi={this.getWeatherApi}/>
      </div>

      // :
      // <div>
      //   <p> ERROR </p>
      // </div>
    );
  }
}


