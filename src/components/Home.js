import React from "react"
import Question from '../Question'
import questionsData from '../questionsData'

function Home() {
  const questionComponents = questionsData.map(question => <Question 
    question={question.question} 
    answerA={question.answerA} 
    answerB={question.answerB} 
    answerC={question.answerC}
    answerD={question.answerD}

    /> )

  
  return (
      <div>
        {questionComponents}
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