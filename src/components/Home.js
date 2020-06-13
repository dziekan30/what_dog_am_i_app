import React from 'react'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Container} from 'react-bootstrap'


function Home() {
  return (
    <div>
    <Container>
      <Card className="text-center">
        <Card.Header>Question</Card.Header>
        <Card.Body>
          <Card.Title>Answer</Card.Title>
          <Card.Title>Answer</Card.Title>
          <Card.Title>Answer</Card.Title>
          <Card.Title>Answer</Card.Title>
         
        </Card.Body>
          
        <Card.Footer> <Button variant="primary">Next</Button></Card.Footer>
        <Card.Footer> <Button variant="primary">Previous</Button></Card.Footer>
      </Card>
      </Container>
    </div>
    );
}

export default Home;