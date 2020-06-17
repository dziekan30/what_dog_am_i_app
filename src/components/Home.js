import React from "react"
import Question from './Question'
import questionsData from './questionsData'
import Result from './Result'
import resultsData from './resultsData'
// import {Card} from "react-bootstrap"
// import {Container} from "react-bootstrap"
// import {Button} from "react-bootstrap"



function Home() {
  const questionComponents = questionsData.map(question => <Question 
    key = {question.id}
    question={question.question} 
    answerA={question.answerA} 
    answerB={question.answerB} 
    answerC={question.answerC}
    answerD={question.answerD}

    /> )

  const resultComponents = resultsData.map(result => <Result
    key = {result.id}
    dogName={result.dogName} 
    imgUrl={result.imgUrl} 
    dogBlurb={result.dogBlurb}

    /> )

  
  return (
      <div>
        {questionComponents}
        {resultComponents}
      </div>
    )
}


export default Home;