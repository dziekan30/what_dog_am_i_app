import React from "react"
import {Container, Card, Button} from "react-bootstrap"

class Question extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      finalScore: 0,
      isDisabled: true,
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
        selectAnswerA: true, 
        selectAnswerB: false, 
        selectAnswerC: false,
        selectAnswerD: false,
        isDisabled: false
    });
  }

  handleToggleAnswerB() {
      this.setState({
        selectAnswerB: true,
        selectAnswerA: false, 
        selectAnswerC: false,
        selectAnswerD: false,
        isDisabled: false
    });
  }

  handleToggleAnswerC() {
      this.setState({
        selectAnswerC: true,
        selectAnswerA: false, 
        selectAnswerB: false,
        selectAnswerD: false,
        isDisabled: false
    });
  }

  handleToggleAnswerD() {
      this.setState({
        selectAnswerD: true,
        selectAnswerA: false, 
        selectAnswerB: false,
        selectAnswerC: false,
        isDisabled: false
    });
  }

  handleIncreaseScore() {
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

      this.props.handleIncreaseScore(value);
      this.setState({
        selectAnswerA: false,
        selectAnswerB: false,
        selectAnswerC: false,
        selectAnswerD: false,
        isDisabled: true
      })
      this.props.handleNextQuestion();
  };

  render() {
    if (this.props.question.id !== this.props.counter) {
      return null
    } 
    return (
      <div className="question-background">
        <Container>
          <Card>
            <Card.Header style={{color: "red"}}> Question {this.props.question.id}: {this.props.question.query}</Card.Header>
            <Card.Body>


            <div >
              <Card.Title >
                <Button 

                  style={this.state.selectAnswerA? null: {backgroundColor: "#003434"}}  
                  size="lg" 
                  block 
                  onClick={this.handleToggleAnswerA}
                  >
                  A: {this.props.question.answerA}
                </Button>
              </Card.Title>

              <Card.Title >
                <Button 
                  style={this.state.selectAnswerB? null:{backgroundColor: "#003434"}}  
                  size="lg" 
                  block 
                  onClick={this.handleToggleAnswerB}
                  >
                  B: {this.props.question.answerB}
                </Button>
              </Card.Title>
            </div>

              <div >
                <Card.Title >
                  <Button 
                    style={this.state.selectAnswerC? null: {backgroundColor: "#003434"}}  
                    size="lg" 
                    block 
                    onClick={this.handleToggleAnswerC}
                    >
                    C: {this.props.question.answerC} 
                  </Button>
                </Card.Title>
                <Card.Title >
                  <Button 
                    style={this.state.selectAnswerD? null: {backgroundColor: "#003434"}}  
                    size="lg" 
                    block 
                    onClick={this.handleToggleAnswerD}
                    >
                    D: {this.props.question.answerD} 
                  </Button>
                </Card.Title>
              </div>

              <Card.Title>
              <Button 
                style={{backgroundColor: "#003434"}} 
                id="nextButton" 
                disabled={this.state.isDisabled}
                size="lg" 
                block 
                onClick={this.handleIncreaseScore} 
                variant="info"
                >
                Next
              </Button>
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