import React, { Component } from 'react';


 export default class App extends Component {
   constructor() {
     super();
     this.state = {
       forecastObj: null, 
       error: null,
       locationChecked: false,
     };
   }
  render() {
    return (
      <div className="app-background">
        <p> Hello World </p>
      </div>
    );
  }
}


