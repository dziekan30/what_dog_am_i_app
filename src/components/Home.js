import React, {Component} from "react";
import Question from "./Question";
import questionsData from './questionsData';
import Score from './Score';

class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          counter: 1,
          id: '',
          score: 0,
          isAnswered: false,
          key: '',
          question: [],
          query: '',
          AnswerA: '',
          AnswerB: '',
          AnswerC: '',
          AnswerD: '',
          scoreArray: []
        }
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
        this.handleNextQuestion = this.handleNextQuestion.bind(this);
    } 

    componentDidMount() {
      this.setState(questionsData.map(question => 
        this.setState({

          id: question.id,
          key: question.id,
          query: question.query, 
          AnswerA: question.answerA,
          AnswerB: question.answerB,
          AnswerC: question.answerC,
          AnswerD: question.answerD,
          score: question.score

        })
        ))

        }

  handleIncreaseScore(value) {
      const scoreArray = this.state.scoreArray
      scoreArray.push(value)
      this.setState({
        scoreArray: scoreArray
      })
      console.log(scoreArray)
    }

  handleNextQuestion() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {

    return (
        <div>

            <div>
            {questionsData.map(question => 
            <Question 
              question={question} 
              key={question.id}
              counter={this.state.counter}
              handleNextQuestion={this.handleNextQuestion}
              handleIncreaseScore={this.handleIncreaseScore}
            />
              )}
            <Score scoreArray={this.state.scoreArray} />
            </div>
          </div>
        );

    }
}

export default Home;