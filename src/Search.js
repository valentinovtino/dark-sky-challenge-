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

    render() {
        return (
            <div className='update-search'>
                <form>
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