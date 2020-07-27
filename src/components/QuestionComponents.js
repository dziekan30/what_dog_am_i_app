import React, {Component} from "react";
import Question from './Question';
import questionsData from './questionsData';

function QuestionComponents() { 
  return( 
    <div>
    QuestionComponent = questionsData.map(question => 
      <ul className="Question" 
      key = {question.id}
      number = {question.id}
      question={question.question} 
      answerA={question.answerA} 
      answerB={question.answerB} 
      answerC={question.answerC}
      answerD={question.answerD}
      score={question.score}
      // finalScore={question.finalScore}
      // incrementScore={this.incrementScore}
      >
      </ul> )

    </div>

  )};

export default QuestionComponents;
