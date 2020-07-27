import React, {Component} from "react";

class Score extends Component {
  constructor(props) {
        super(props);
        this.totalScore = this.totalScore.bind(this);
        // this.showScore = this.showScore.bind(this);
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

  switch(scoreTotal) {
    case (5):
      Answer = Golden Retriever;
      break;
      Answer = resultsData.dogName, resultsData.dogBlurb;
      break;
    // case 45: 
    //   Answer = Pug;
    //   break;
    // case 70: 
    //   Answer = Pomeranian;
    //   break;
    // case 95:
    //   Answer = Golden Retriever;
    //   break;
    // case 120: 
    //   Answer = Pit Bull;
    //   break;
    // case 150:
    //   Answer = Border Collie;
    //   break;
    // case 150: 
    //   Answer = Chihuahua;
    //   break;
  }
  
  render() {
    if (this.props.scoreArray.length < 1) {
      return null
    }
    return(
      <div>
      <h1>Hello!</h1>
      {this.totalScore()}
      </div>
    )};
}

export default Score;