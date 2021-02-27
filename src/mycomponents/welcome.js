import React, { Component } from 'react'

class welcome extends Component{

    render(){
        return <h1>I am from {this.props.name}</h1>
    }
}

export default welcome