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

  getWeatherApi(latitude, longitude) {
    api.returnWeatherAPI(latitude, longitude)
    .then(json => {
      this.setState({ forecastObj: json,
                   error: null, 
                   locationChecked: true  
                  });
    })
    
  }

  //  componentDidMount() {
  //   this.getWeatherApi();
  //  }

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


