import React, {Component} from "react"
import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"

class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selectAnswerA: false};
    this.state = {selectAnswerB: false};
    this.state = {selectAnswerC: false};
    this.state = {selectAnswerD: false};
    this.state = {selectScore: 0}

    this.handleClick = 
    this.handleClick.bind(this);
  }
    handleClick() {
      this.setState(state => ({
        selectAnswerA: !state.selectAnswerA
      }));
    }

  render() {
    return (
      <div>
        <Container>
          <Card>
            <Card.Header style={{color: "red"}}> Question {this.props.number}: {this.props.question}</Card.Header>
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





incrementScore = (QuestionId) => {
        // console.log('increment playerId', playerId)
        // what player got clicked? -> call incrementScore with a playerId
        // update the score of the correct player
        const updatedPlayers = this.state.players
            .map(player => {
                // player got clicked -> update score
                if(player.id === playerId){
                    return { ...player, score: player.score + 1 }
                }
                // this is not the right player, don't do anything
                return player
            })
        this.setState({ players: updatedPlayers }) // -> render and display updated players
        // this.setState() to change the state
    }


<button onClick={() => props.incrementScore(props.id)}>D: {this.props.answerD} </button>