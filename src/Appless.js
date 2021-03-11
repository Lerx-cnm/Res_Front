import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Project1 from './components';
 
class Appless extends Component {
  showMsg = () => 'Hello World'
 
  render() {
    return (
      <div>
      {/* <Router>
        <Route exact path='/' render={<h1>HI</h1>}></Route>
        <h4>Project 1</h4>
        <a href='/project1'>Project 1 button</a>
        <Route exact path='/project1' component={Project1}></Route>
        <h4>Project 2</h4>
        <Route exact path='/project2'></Route>
        <h4>Project 3</h4>
        <Route exact path='/project3'></Route>
        <h4>Project 4</h4>
        <Route exact path='/project4'></Route>
        <h4>Project 5</h4>
        <Route exact path='/project5'></Route>
      </Router> */}
      </div>
    );
  }
}

export default Appless;
