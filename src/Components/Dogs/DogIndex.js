import React, { Component } from 'react';

export default class DogIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // dog: {},
            dogPic: '',
        }

    }

    getDogPic = () => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    dogPic: data.message,
                })
            }).catch(error => console.log(error))

    }
    render () {
        return (
            <div>
                <h1>Dog Index</h1>
                <button onClick={this.getDogPic}>Get Dog Pic</button>
                <img src={this.state.dogPic} alt="dog" />
            </div>
        )
    }

    
}

