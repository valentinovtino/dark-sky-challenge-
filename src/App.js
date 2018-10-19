import React, { Component } from 'react';
import api from './helper/api.js';


 export default class App extends Component {
   constructor() {
     super();
     this.state = {
       forecastObj: null, 
       error: null,
       locationChecked: false,
     };
   }

  getWeatherApi() {
    api.returnWeatherAPI()
    .then(json => {
      this.setState({ forecastObj: json,
                   error: null, 
                   locationChecked: true  
                  });
    })
    
  }

   componentDidMount() {
    this.getWeatherApi();
   }

  render() {
    return (
      <div className="app-background">
        <p> Hello World </p>
      </div>
    );
  }
}


