import React from "react"
import {Container} from "react-bootstrap"
import {Card} from "react-bootstrap"
import {Button} from "react-bootstrap"
import questionsData from './questionsData';

// const finalScore = 4
class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      finalScore: 0,
      selectAnswerA: false,
      selectAnswerB: false,
      selectAnswerC: false,
      selectAnswerD: false
    };

    this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
    this.handleToggleAnswerA = this.handleToggleAnswerA.bind(this);
    this.handleToggleAnswerB = this.handleToggleAnswerB.bind(this);
    this.handleToggleAnswerC = this.handleToggleAnswerC.bind(this);
    this.handleToggleAnswerD = this.handleToggleAnswerD.bind(this);
  };

  handleToggleAnswerA() {
      this.setState({
        selectAnswerA: !this.state.selectAnswerA
    });
    // console.log(this.state.selectAnswerA);
  }

  handleToggleAnswerB() {
      this.setState({
        selectAnswerB: !this.state.selectAnswerB
    });
    // console.log(this.state.selectAnswerB);
  }

  handleToggleAnswerC() {
      this.setState({
        selectAnswerC: !this.state.selectAnswerC
    });
    // console.log(this.state.selectAnswerC);
  }

  handleToggleAnswerD() {
      this.setState({
        selectAnswerD: !this.state.selectAnswerD
    });
    // console.log(this.state.selectAnswerD);
  }

  handleIncreaseScore() {
      this.setState({
        finalScore: this.state.finalScore + 1
      })
      // console.log(this.state.finalScore)
      let value = ""
      if (this.state.selectAnswerA === true) {
        value = "A"
      } else if (this.state.selectAnswerB === true) {
        value = "B"
      } else if (this.state.selectAnswerC === true) {
        value = "C"
      } else if (this.state.selectAnswerD === true) {
        value = "D"
      }
      // console.log(value, "waffle");
      this.props.handleIncreaseScore(value);
      this.props.handleNextQuestion();
  };

  render() {
    if (this.props.question.id !== this.props.counter) {
      return null
    } 
    return (
      <div>
        <Container>
          <Card>
            <Card.Header style={{color: "red"}}> Question {this.props.question.id}: {this.props.question.query}</Card.Header>
            <Card.Body>
              <Card.Title>
                <Button style={{backgroundColor: "#003434"}} onClick={this.handleToggleAnswerA}>
                  A: {this.props.question.answerA}
                </Button>
              </Card.Title>
              <Card.Title>
                <Button style={{backgroundColor: "#003434"}} onClick={this.handleToggleAnswerB}>
                  B: {this.props.question.answerB}
                </Button>
              </Card.Title>
              <Card.Title>
                <Button style={{backgroundColor: "#003434"}} onClick={this.handleToggleAnswerC}>
                  C: {this.props.question.answerC} 
                </Button>
              </Card.Title>
              <Card.Title>
                <Button style={{backgroundColor: "#003434"}} onClick={this.handleToggleAnswerD}>
                  D: {this.props.question.answerD} 
                </Button>
              </Card.Title>
              <Card.Title>
              <Button style={{backgroundColor: "#003434"}} onClick={this.handleIncreaseScore} variant="info">Next</Button>
              </Card.Title>
            </Card.Body>
            <div>
              
            </div>
          </Card>
        </Container>
      </div>
      )
  }
}

export default Question;