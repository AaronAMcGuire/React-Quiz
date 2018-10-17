import React from 'react';
import update from 'react-addons-update';
import quizQuestions from './quizQuestions';
import Game from './Game';
import Result from './Result';

class Quiz extends React.Component{


    constructor(props) {
        super(props);
    
        this.state = {
            counter:0,
            questionId:1,
            question: '',
            answerOptions: [],
            answer: '',
            answersCount:{
                Right: 0,
                Wrong: 0,
            },
            result:''
        };
        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }
    componentDidMount(){
      // setTimeout defers adding class until mounted
      document.body.classList.remove('loaded');
      const container = document.querySelector('.container');
 setTimeout(() => {
   container.classList.add('loaded');
   },200);
 }
    componentWillMount(){
        const shuffledAnswerOptions = quizQuestions.map((question) => this.shuffleArray(question.answers));
     
        this.setState({
            question: quizQuestions[0].question,
            answerOptions: shuffledAnswerOptions[0]
        });
    }


    shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      };

      handleAnswerSelected(event) {
        this.setUserAnswer(event.currentTarget.value);
    
        if (this.state.questionId < quizQuestions.length) {
            setTimeout(() => this.setNextQuestion(), 300);
        } else {
            setTimeout(() => this.setResults(this.getResults()), 300);
        }
      };

      setUserAnswer(answer) {
        const updatedAnswersCount = update(this.state.answersCount, {
          [answer]: {$apply: (currentValue) => currentValue + 1}
        });
    
        this.setState({
            answersCount: updatedAnswersCount,
            answer: answer
        });
      }

      setNextQuestion() {
        const counter = this.state.counter + 1;
        const questionId = this.state.questionId + 1;
    
        this.setState({
            counter: counter,
            questionId: questionId,
            question: quizQuestions[counter].question,
            answerOptions: quizQuestions[counter].answers,
            answer: ''
        });
      }

      getResults() {
        const answersCount = this.state.answersCount;
        const answersCountKeys = Object.keys(answersCount);
        const answersCountValues = answersCountKeys.map((key) => answersCount[key]);
     
        return answersCountValues;
      }
    
      setResults(result) {
        this.setState({
          result:result[0],
          wrong:result[1]
        })
      }

      renderQuiz() {
        return (
          <Game
            answer={this.state.answer}
            answerOptions={this.state.answerOptions}
            questionId={this.state.questionId}
            question={this.state.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={this.handleAnswerSelected}
          />
        );
      }
    
      renderResult() {
        return (
          <Result Right={this.state.result} Wrong={this.state.wrong} />
        );
      }



    render(){
        return(
            <React.Fragment>
                {this.state.result ? this.renderResult() : this.renderQuiz()}
            </React.Fragment>
        )
    }
}

export default Quiz;