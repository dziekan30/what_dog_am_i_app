import React, {Component} from "react";
import Question from "./Question";
import questionsData from './questionsData';

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
        this.componentDidMount = this.componentDidMount.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
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

  checkAnswer(event) {
    let { isAnswered } = this.props;

    if(!isAnswered) {
      let elem = event.currentTarget;

      let { increaseScore } = this.props;

      if (elem === this.AnswerA) {
        increaseScore(5);
      } else if (elem === this.AnswerB) {
        increaseScore(10); 
      } else if (elem === this.AnswerC) {
        increaseScore(15);
      } else if (elem === this.AnswerD) {
        increaseScore(20);
      }
    };
  };

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

            </div>

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
            </div>
          </div>
        );

    }
}

export default Home;