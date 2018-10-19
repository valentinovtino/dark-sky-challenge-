import React, { Component } from 'react';
import './css/Search.css';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            latitude: '',
            longitude: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const location = `${this.state.latitude},${this.state.longitude}`

        
        this.props.getWeatherApi(location)
        this.temperatureColor()

    }

    temperatureColor = () => {
        const x = Math.floor(Math.random() * 256);
        const y = Math.floor(Math.random() * 256);
        const z = Math.floor(Math.random() * 256);
        const bgColor = "rgb(" + x + "," + y + "," + z + ")";
   
      
        document.body.style.background = bgColor;
        document.getElementById('button').style.background = bgColor;
    }
    
   

    render() {
        return (
            <div className='update-search'>
                <form onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    placeholder='enter latitude'
                    onChange={this.handleInputChange}
                    value={this.state.latitude}
                    name='latitude'
                    />
                    <input 
                    type='text'
                    placeholder='enter longitude'
                    onChange={this.handleInputChange}
                    value={this.state.longitude}
                    name='longitude'
                    />
                    <button id='button'>Submit</button>
                </form>
            </div>
        )
    }
}