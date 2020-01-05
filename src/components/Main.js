import React, { Component } from 'react'
import Wall from './Wall'

class Main extends Component {
    render() {
        return(
            <div>
                <h1>Random Number Facts</h1>
                <div>
                    <Wall/>
                </div>
                <footer>
                    <div>
                        <h2>by Robert Ortiz</h2>
                    </div>
                    <div>
                        <h3>with the help of <a href="http://numbersapi.com/">Numbers API</a></h3>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Main