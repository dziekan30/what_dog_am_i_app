import React from "react"
import {Card} from "react-bootstrap"
import {Container} from "react-bootstrap"
import {Button} from "react-bootstrap"

function Question(props) {
  return (
  <div>
  <div>
    <Container >
      <Card className="text-center">
      <Card.Body>
        <Card.Title>Question: {props.question}</Card.Title>
        <Card.Title>A: {props.answerA}</Card.Title>
        <Card.Title>B: {props.answerB}</Card.Title>
        <Card.Title>C: {props.answerC}</Card.Title> 
        <Card.Title>D: {props.answerD}</Card.Title>     
      </Card.Body>
        <Card.Footer> <Button variant="primary">Next</Button></Card.Footer>
        <Card.Footer> <Button variant="primary">Previous</Button></Card.Footer>
      </Card>
    </Container>
  </div>
  </div>
        );
}

export default Question;




