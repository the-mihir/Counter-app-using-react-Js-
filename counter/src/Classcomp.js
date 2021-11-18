import React, { Component } from 'react'
import './classcomp.css'

class Classcomp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            number:0
             
        }
    }

    add=()=>{
        this.setState({number:this.state.number+1})
    }

    kom=()=>{
        this.setState({number:this.state.number-1})
        
    }
    
    render() {
        

        return (
            <div>
                <h2>{this.state.number}</h2>
                <button onClick={this.add}>Incrace 1</button>
                <button onClick={this.kom}>Dicrace 1</button>
            </div>
        )
    }
}

export default Classcomp
