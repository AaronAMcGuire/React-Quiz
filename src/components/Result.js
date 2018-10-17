import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import ResultsGraphic from '../assets/results-graphic.svg';

function Result(props) {


  
  return (
    <React.Fragment>
      <div className='results container'>
      <Header/>

        <div className='results-container'>
        <div className='results-left'>
        <img className='results-container__image' src={ResultsGraphic} alt='' />
        </div>
        <div className='results-right'>
        <p className='results__outcome'>{props.Right} out of {props.Wrong + props.Right}</p>
        </div>
        </div>
      </div>
      
    </React.Fragment>
  );

}

Result.propTypes = {
  Right: PropTypes.string.isRequired,
  Wrong: PropTypes.string.isRequired,
};

export default Result;