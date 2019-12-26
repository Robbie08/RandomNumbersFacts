import React from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Form} from 'react-bootstrap'

// this function will accept and object as prop to populate the card
function Wall(props){
    const data = props.data // destructuring data passed as an object
    return(
        <div>
           <Card className="text-center">
           
            <Card.Header></Card.Header>
            <Card.Body>
                <Card.Title>The number: {data.number}</Card.Title>
                <Card.Text className="text-primary">{data.fact}</Card.Text>
                <Form.Control size="text" type="text" placeholder="Enter a number to find out an intersting fact about it" />
                <br/>
                <Button variant="primary">Fetch Fact</Button>
            </Card.Body>
            </Card>
        </div>
    )

}

export default Wall