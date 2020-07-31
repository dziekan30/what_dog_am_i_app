import React, {Component} from "react";
import {Card, Button, Container} from "react-bootstrap";
import resultsData from './resultsData';

class Score extends Component {
  constructor(props) {
        super(props);
        this.totalScore = this.totalScore.bind(this);
  } 

    totalScore() {
      let scoreTotal = 0
      this.props.scoreArray.forEach((answer) => {
        if (answer === "A") {
          scoreTotal += 5;
        }
        else if (answer === "B") {
          scoreTotal += 10;
        }
        else if (answer === "C") {
          scoreTotal += 15;
        }
        else if (answer === "D") {
          scoreTotal += 20;
        }    
      });
      return scoreTotal
    }

    getAnswer(score) {
      let answer = ""
      if (score <= 50) {
        answer = "Golden Retriever"
      } else if (score <= 70) {
        answer = "Pug"
      } else if (score <= 90) {
        answer = "Pomeranian"
      } else if (score <= 120) {
        answer = "Border Collie"
      } else if (score <= 150) {
        answer = "Chihuahua"
      } else if (score <= 200) {
        answer = "Pit Bull"
      } 
      return resultsData.find(data => data.dogName === answer)
    }

  render() {
    if (this.props.scoreArray.length < 10) {
      return null
    }

    const totalScore = this.totalScore()
    const answer = this.getAnswer(totalScore)

    return(
      <div className="result-background">
        <Container >
          <img className="result-img" src={answer.imgUrl} alt="" />
          {answer.dogName}
          {answer.dogBlurb}
          <Card.Title style={{marginBottom: 0}}>
            <Button style={{backgroundColor: "#003434", marginBottom: 0}} onClick={this.props.handleRestartQuiz} variant="info">Restart</Button>
          </Card.Title>
        </Container>
      </div>
    )
  };
}

export default Score;