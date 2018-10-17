import React from 'react';
import Illustration from '../assets/start-menu-image.svg';
import { Link } from 'react-router-dom';


class Start extends React.Component {

    componentDidMount(){
      // setTimeout defers adding class until mounted
      setTimeout(() => {
      document.body.classList.add('loaded');
      },0);
    }
  
    render() {
      return (
        <div className="App start-screen">
            <div className='start-screen-menu'>
            <img src={Illustration} alt='' className='start-screen-menu__image'/>
            <h1 className='start-screen-menu__title'>Manchester Quiz</h1>
            <p className='start-screen-menu__body'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. </p>
            <Link to="/game" className='start-screen-menu__button'>Start</Link>
            </div>
        </div>
      );
    }
  }
  
  export default Start;