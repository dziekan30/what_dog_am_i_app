import React from "react"
import Question from '../Question'
import questionsData from '../questionsData'

// import Joke from "../Joke"
// import jokesData from "../jokesData"

// function Home() {
//     const jokeComponents = jokesData.map(joke => <Joke key question={joke.question} punchLine={joke.punchLine} />)
    
    
//     return (
//         <div>
//             {jokeComponents}            
//         </div>
//     )
// }

// export default Home


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





// function App() {
//     jokesData.map(joke => {
//         return (
//             <Joke question={joke.question} punchLine={joke.pu} />
//         )
//     })



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