import React, { Component } from 'react';

export default class Search extends Component {
    constructor() {
        super();
        this.state ={
            latitude: '',
            longitude: ''
        }
    }

    render() {
        return (
            <div className='update-search'>
                <form>
                    <input 
                    type='text'
                    placeholder='enter latitude'
                    value={this.state.latitude}
                    name='latitude'
                    />
                    <input 
                    type='text'
                    placeholder='enter latitude'
                    value={this.state.latitude}
                    name='longitude'
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}