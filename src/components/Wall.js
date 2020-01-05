import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

const API = 'http://numbersapi.com/';  // API URL

// this function will accept and object as prop to populate the card
class Wall extends Component {
    state = {
        number: 'random',
        numberView: 'random',
        fact: '12 is the number of keys in any standard digital telephone (1 through 9, 0, * and #).'
    };

    // handle the user data from the form
    getNumberInput = (event) => {
        // we have to update our state
        this.setState({ number: event.target.value });  
    }

    // handle the user data when the button is clicked
    fetchFact = async () => {
        
        const numberInput = this.state.number;
        // Initialize the correct URL
        // If the button has 
        const URL = numberInput ? `${API}${numberInput}` :  `${API}random`;

        // use that for fetch
        try {
            const response = await fetch(URL);
            const text = await response.text();
    
            // set state string for number fact
            this.setState({
                    fact: text,
                    numberView: numberInput
            });
        } catch(E) {
            console.log(E); // output error
        }
    }
    
    async componentDidMount () {
        this.fetchFact(); // call the fetchFact to update UI
    }

    render(){
        return(
            <div>
               <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                    <Card.Title>The number: {this.state.numberView}</Card.Title>
                    <Card.Text className="text-primary">{this.state.fact}</Card.Text>
                    <Form.Control onChange={this.getNumberInput} name="Number" size="text" type="text" placeholder="Enter a number to find out an intersting fact about it" />
                    <br/>
                    <Button onClick={this.fetchFact} id="btnClicked" variant="primary">Fetch Fact</Button>
                </Card.Body>
                </Card>
            </div>
        )
    }

}

export default Wall