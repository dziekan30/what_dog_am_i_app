import React from "react"

function Question(props) {
  return (
  <div>
      <h3 style={{display: !props.question && "none"}}> Question: {props.question}</h3>
      <h3 style={{display: !props.answerA && "none"}}> A: {props.answerA}</h3>
      <h3 style={{display: !props.answerB && "none"}}> B: {props.answerB}</h3>
      <h3 style={{display: !props.answerC && "none"}}> C: {props.answerC}</h3>
      <h3 style={{display: !props.answerD && "none"}}> D: {props.answerD}</h3>
      <hr/>
  </div>
        );
}

export default Question;


