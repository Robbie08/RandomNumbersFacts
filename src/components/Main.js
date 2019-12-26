import React, { Component } from 'react'
import { render } from 'react-dom'
import Wall from './Wall'


const title = "Random Number Facts"

class Main extends Component {
    render() {
        return(
            <div>
                <h1>{title}</h1>
                <div>
                    <Wall></Wall>
                </div>
            </div>
        )
    }

}

export default Main