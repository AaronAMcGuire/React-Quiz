import React, { Component } from 'react';
import './styles/style.css';
import {Route} from 'react-router-dom'; 
import Start from './components/Start';
import Quiz from './components/Quiz';

class App extends Component {

  componentDidMount(){
    // setTimeout defers adding class until mounted
    setTimeout(() => {
    document.body.classList.add('loaded');
    },0);
  }

  componentWillUnmount(){
    setTimeout(() => {
      document.body.classList.remove('loaded');
      },0);
  }

  render() {
    return (
      <React.Fragment>
        <Route exact={true} path="/" component={Start}/>
        <Route exact={true} path="/game" component={Quiz}/>
      </React.Fragment>
    );
  }
}

export default App;
