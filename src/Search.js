import React, { Component } from 'react';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state ={
            latitude: '',
            longitude: ''
        }
    }

    handleInputChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
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
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}