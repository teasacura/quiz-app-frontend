import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Topics from './components/Topics'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/topics" component={Topics}/>
        </div>
      </Router>
    );
  }
}

export default App;
