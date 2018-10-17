import React from 'react';
import Header from './Header';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';
import PropTypes from 'prop-types';
import ChatIcon from '../assets/chat-icon.svg';
import { CSSTransitionGroup } from 'react-transition-group' // ES6




function Game(props){
    
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }

      return(
        <CSSTransitionGroup
        className="container"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
          <React.Fragment>
          <Header/>
        <section className='game'>
        <div className='game-content'>
        <img className='game-content__icon' src={ChatIcon} alt=''/>
        <Question content={props.question} />
        <ul className='answerOptions'>
        {props.answerOptions.map(renderAnswerOptions)}
        </ul>
        </div>
        <div key={props.questionId}></div>
        <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
        />
        </section>
          </React.Fragment>
          </CSSTransitionGroup>
      )
  
}



Game.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
};

export default Game;