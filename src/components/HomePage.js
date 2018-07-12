import React, { Component } from 'react';

import LoginForm from './LoginForm'
import logo from '../images/logo-plain.jpg'
import clock from '../images/clock.jpg'

class HomePage extends Component {

  render() {
    return (
      <div id="home">
        <img id="logo" src={logo} />
        <hr />
        <p>20 Questions.</p>
        <p>60 Seconds.</p>
        <p>You ready?</p>
        <LoginForm handleLogin={this.props.handleLogin} loggedIn={this.props.loggedIn}/>
      </div>
    );
  }
}


export default HomePage;
