import React, {Component} from "react";
import {Card} from "react-bootstrap";
import {Button} from "react-bootstrap";
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
      <div>
        <img src={answer.imgUrl} alt="" />
        <h1>Hello!</h1>
        {answer.dogName}
        {answer.dogBlurb}
      <Card.Title>
      <Button style={{backgroundColor: "#003434"}} onClick={this.props.handleRestartQuiz} variant="info">Restart</Button>
      </Card.Title>
      </div>

  )};
}

export default Score;




  
    

  // switch(scoreTotal) {
  //   // case (5)
  //   //   Answer = Golden Retriever;
  //   //   break;
  //   //   Answer = resultsData.dogName, resultsData.dogBlurb;
  //   //   break;
  //   // case 45: 
  //   //   Answer = Pug;
  //   //   break;
  //   // case 70: 
  //   //   Answer = Pomeranian;
  //   //   break;
  //   // case 95:
  //   //   Answer = Golden Retriever;
  //   //   break;
  //   // case 120: 
  //   //   Answer = Pit Bull;
  //   //   break;
  //   // case 150:
  //   //   Answer = Border Collie;
  //   //   break;
  //   // case 150: 
  //   //   Answer = Chihuahua;
  //   //   break;
  // }
