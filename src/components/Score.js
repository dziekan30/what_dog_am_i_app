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
        <div className="Container">
          <div className="frame">
            <div className="mat">
              <div className="result-dog-name">
                <h1>You're a {answer.dogName}</h1>
              </div>
                <div className="art">
                  <img className="result-img result-background-img" src={answer.imgUrl} alt="" />
               </div>
               <div>
                <h5 className="result-blurb">{answer.dogBlurb}</h5>
                
                  <Button 
                    className="restart-button" 
                    style={{backgroundColor: "#003434", marginBottom: 0}} 
                    onClick={this.props.handleRestartQuiz} 
                    variant="info"
                    size="lg" 
                    block 
                    >
                    Restart
                  </Button>
               </div>

            </div>
          </div>
        </div>

        </Container>
      </div>
    )
  };
}

export default Score;