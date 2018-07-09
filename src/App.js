import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
import Topics from './components/Topics'
import TopicsCard from './components/TopicsCard'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <main>
            <Route exact path="/" component={HomePage}/>
            <Route path="/topics" component={Topics}/>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
