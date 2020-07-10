import React, {Component} from "react";
import Question from './Question';
import questionsData from './questionsData';
import Result from './Result';
import resultsData from './resultsData';
// import {Card} from "react-bootstrap"
// import {Container} from "react-bootstrap"
// import {Button} from "react-bootstrap"
class Home extends Component {
  constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          id: '',

          score: 0,
          isAnswered: false,
          key: '',
          number: '',

          QuestionList: [],

          question: [],
          query: '',
          AnswerA: '',
          AnswerB: '',
          AnswerC: '',
          AnswerD: '',
        }
        this.componentDidMount = this.componentDidMount.bind(this);
        this.checkAnswer = this.checkAnswer.bind(this);
        this.handleIncreaseScore = this.handleIncreaseScore.bind(this);
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
        // console.log(question.id)
        // this.setState({
        //   question: question.question
        // }),
        //   console.log(this.state.query, "waffle")
        ))
        // console.log(this.question.id, "waffle")

        }
      // {
      //   question: this.questionsData.QuestionData[0],
      //   id: this.question.id,
      //   number: this.question.id,
      //   query: this.question.query, 
      //   AnswerA: this.question.answerA,
      //   AnswerB: this.question.answerB,
      //   AnswerC: this.question.answerC,
      //   AnswerD: this.question.answerD,
      //   score: this.question.score
      // })
    // }

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
      // this.props.showButton();
    };
  };

  handleIncreaseScore(amount) {
        this.setState({
          score: this.state.score + amount
        });
    }

  render() {

    return (
        <div>
            <div>
            {questionsData.map(question => 
            <div>
              <h1>{question.id}. {question.query}</h1>
              <button onClick={this.checkAnswer}><span>A. </span> <p>{question.answerA}</p></button>
              <button onClick={this.checkAnswer}><span>B. </span> <p>{question.answerB}</p></button>
              <button onClick={this.checkAnswer}><span>C. </span> <p>{question.answerC}</p></button>
              <button onClick={this.checkAnswer}><span>D. </span> <p>{question.answerD}</p></button>
            </div>
              )}

            </div>
          </div>
        );

    }
}

export default Home;

// if (elem === this.AnswerA) {
//         this.increaseScore={this.handleIncreaseScore(5)};
//       } else if (elem === this.AnswerB) {
//         increaseScore={handleIncreaseScore(10)};
//       } else if (elem === this.AnswerC) {
//         increaseScore={handleIncreaseScore(15)};
//       } else if (elem === this.AnswerD) {
//         increaseScore={handleIncreaseScore(20)};
//       }