import React, {Component} from "react"
import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
// const finalScore = 4
class Question extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {finalScore: 0};
    this.state = {score: 0};
    this.state = {selectAnswerA: false};
    this.state = {selectAnswerB: false};
    this.state = {selectAnswerC: false};
    this.state = {selectAnswerD: false};
    // this.state = {selectScore: 0};
    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    this.finalScore = 0;
    // this.handleClick = this.handleClick.bind(this);
    // this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
  };
  handleIncreaseScore() {
     console.log(this.finalScore = this.finalScore + 1);
     }
//     onMove = () => {
//             console.log(this.state.finalScore);
//             this.setState({ finalScore: finalScore + 2 });
// }
    // handleClick() {
    //   this.setState(state => ({
    //     selectAnswerA: !state.selectAnswerA
    //   }));
    // }
    // handleIncreaseScore() {
    //   var finalScore = 1
    //   // this.setState({
    //   //          finalScore: this.state.finalScore + 5
    //   //       });
    //     }
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
              <Card.Footer> <Button onClick={this.handleIncreaseScore} variant="info">Next</Button></Card.Footer>
              <div>
              </div>
          </Card>
        </Container>
      </div>
      )
  }
}
export default Question;
// handleIncreaseScore() {
//         this.setState({
//           if (selectAnswerA) {
//             score = this.state.score + 1;
//           }
//           else if (selectAnswerB) {
//             score = this.state.score + 2;
//           }
//           else if (selectAnswerC) {
//             score = this.state.score + 3;
//           }
//           else if (selectAnswerD) {
//             score = this.state.score + 4;
//           };
//         });
//     }
// if answerA || answerB  || answerC || answerD
//   true
// score += +1
// incrementScore = (QuestionId) => {
//         // console.log('increment playerId', playerId)
//         // what player got clicked? -> call incrementScore with a playerId
//         // update the score of the correct player
//         const updatedPlayers = this.state.players
//             .map(player => {
//                 // player got clicked -> update score
//                 if(player.id === playerId){
//                     return { ...player, score: player.score + 1 }
//                 }
//                 // this is not the right player, don't do anything
//                 return player
//             })
//         this.setState({ players: updatedPlayers }) // -> render and display updated players
//         // this.setState() to change the state
//     }
// <button onClick={() => props.incrementScore(props.id)}>D: {this.props.answerD} </button>