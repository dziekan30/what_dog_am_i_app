import React, {Component} from "react"
import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectAnswer: false};

    this.handleClick = 
    this.handleClick.bind(this);
  }
    handleClick() {
      this.setState(state => ({
        selectAnswer: !state.selectAnswer
      }));
    }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header style={{color: "red"}}> Question: {this.props.question}</Card.Header>
            <Card.Body>
              <Card.Title> 
                <Button style={{backgroundColor: "#003434"}} onClick={this.selectAnswer}>
                  A: {this.props.answerA} {this.state.selectAnswerA ? true : false}
                </Button>
              </Card.Title>
              <Card.Title> 
                <Button style={{backgroundColor: "#003434"}} onClick={this.selectAnswer}>
                  B: {this.props.answerB} {this.state.selectAnswerB ? true : false}
                </Button>
              </Card.Title>
              <Card.Title> 
                <Button style={{backgroundColor: "#003434"}} onClick={this.selectAnswer}>
                  C: {this.props.answerC} {this.state.selectAnswerC ? true : false}
                </Button>
              </Card.Title>
              <Card.Title> 
                <Button style={{backgroundColor: "#003434"}} onClick={this.selectAnswer}>
                  D: {this.props.answerD} {this.state.selectAnswerD ? true : false}
                </Button>
              </Card.Title>
            </Card.Body>
              <Card.Footer> <Button variant="info">Next</Button></Card.Footer>
              <Card.Footer> <Button variant="info">Previous</Button></Card.Footer>
          </Card>
        </Container>
      </div>
      )
  }
}

export default Question;





