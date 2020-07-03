import React from "react"
import resultsData from './resultsData'

const scoreHash = {Question1: 0,
              Question2: 0,
              Question3: 0,
              Question4: 0,
              Question5: 0,
              Question6: 0,
              Question7: 0,
              Question8: 0,
              Question9: 0,
              Question10: 0}

if (chosenAnswer1 = AnswerA) {
    Question1 += 5;
  } else if (chosenAnswer1 = AnswerB) {
    Question1 += 10;
  } else if (chosenAnswer1 = AnswerC) {
    Question1 += 15;
  } else if (chosenAnswer1 = AnswerD) {
  Question1 += 20;
  }

const totalScore = 0;

totalScore = scoreHash.values.sum

switch(showScore) {
  case totalScore < 20: 
    Answer = resultsData.dogName, resultsData.dogBlurb;
    break;
  case totalScore >= 20 && totalScore < 45: 
    Answer = Pug;
    break;
  case totalScore >= 45 && totalScore < 70: 
    Answer = 
  case totalScore >= 70 && totalScore < 95:
  case totalScore >= 95 && totalScore < 120: 
  case totalScore >= 120 && totalScore < 150:
  case totalScore >= 150: 

  }

export default Score;
}

const scoreArray = []

totalScore = function(scoreArray){
  return scoreArray.reduce(function(a, b) {
      return a + b
    }, 0);
}
