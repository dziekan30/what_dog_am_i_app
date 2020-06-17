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
    number = {question.id}
    question={question.question} 
    answerA={question.answerA} 
    answerB={question.answerB} 
    answerC={question.answerC}
    answerD={question.answerD}
    score={question.score}
    incrementScore={this.incrementScore}

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






// <Container>

    
      
//       <Card className="text-center">
//         <Card.Header>Question</Card.Header>
//         <Card.Body>
//           <Card.Title>Answer</Card.Title>
//           <Card.Title>Answer</Card.Title>
//           <Card.Title>Answer</Card.Title>
//           <Card.Title>Answer</Card.Title>
         
//         </Card.Body>
          
//         <Card.Footer> <Button variant="primary">Next</Button></Card.Footer>
//         <Card.Footer> <Button variant="primary">Previous</Button></Card.Footer>
//       </Card>
//       </Container>