import React, { Component } from 'react'

export class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age : this.props.age
        }
    }
    render() {
        const { firstName, lastName, hairColor} = this.props
        const increaseAge = () => this.setState({age : this.state.age + 1});
        
        return (
            <div>
                <h2>{lastName}, {firstName}</h2>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={increaseAge}>Birthday Button for {firstName} {lastName}</button>
            </div>
        )
    }
}

export default PersonCard