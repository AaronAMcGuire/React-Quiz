import React from 'react';
import PropType from 'prop-types';

function AnswerOption(props){

    return(
        <li className="answerOption">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          checked={props.answerType === props.answer}
          id={props.answerType}
          value={props.answerType}
          disabled={props.answer}
          onChange={props.onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={props.answerType}>
          {props.answerContent}
        </label>
      </li>
    )
}

AnswerOption.propType = {
    answerType: PropType.string.isRequired,
    answerContent: PropType.string.isRequired,
    answer: PropType.string.isRequired,
    onAnswerSelected: PropType.string.isRequired
}

export default AnswerOption;