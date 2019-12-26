import React, { Component } from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'
import { render } from 'react-dom'

const API = "http://numbersapi.com/"

// this function will accept and object as prop to populate the card
class Wall extends Component {
    state = {
        number: "",
        numberView: "",
        fact:""
    }

    // handle the user data from the form
    getUserData = (event) => {
        // we have to update our state
        this.setState({
                number: event.target.value
            }
        );  
    }

    

    // handle the user data when the button is clicked
    onFetchedState = async () => {
        // concat number to api link
        const URL = `${API}${this.state.number}`
    
        // use that for fetch
        try {
            const response = await fetch(URL);
            const text = await response.text()
            console.log(text)
    
            // set state string for number fact
            this.setState({
                    fact: text,
                    numberView: this.state.number,
                    
            })
        }
        catch(E) {
            console.log(E); // output error
        }
    }

    render(){
        return(
            <div>
               <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>The number: {this.state.numberView}</Card.Title>
                    <Card.Text className="text-primary">{this.state.fact}</Card.Text>
                    <Form.Control onChange={this.getUserData} name="Number" size="text" type="text" placeholder="Enter a number to find out an intersting fact about it" />
                    <br/>
                    <Button onClick={this.onFetchedState} variant="primary">Fetch Fact</Button>
                </Card.Body>
                </Card>
            </div>
        )

    }

}

export default Wall