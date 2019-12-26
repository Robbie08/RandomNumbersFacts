import React, { Component } from 'react'
import { render } from 'react-dom'
import Wall from './Wall'


const title = "Random Number Facts"
class Main extends Component {
    constructor(){
        super()
        this.state = {
            NumberFact: {
                number: 8,
                fact: "8 is the number of principles of Yong in Chinese calligraphy."
            }
            
        }
    }

    render() {
        return(
            <div>
                <h1>{title}</h1>
                <div>
                    <Wall data={this.state.NumberFact}></Wall>
                </div>
            </div>
        )
    }
}

export default Main