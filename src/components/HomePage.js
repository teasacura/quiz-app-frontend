import React, { Component } from 'react';

class HomePage extends Component {

  render() {
    return (
      <div>
        <h1>Log In!</h1>
        <form>
          <label htmlFor="login-name">Name</label><br></br>
          <input type="text" name="name" id="login-name"></input><br></br>
          <label htmlFor="login-password">Password</label><br></br>
          <input type="password" name="password" id="login-password"></input><br></br>
          <button>Log In</button>
        </form>
        <br></br>
        <br></br>
        <h1>Sign Up!</h1>
        <form>
          <label htmlFor="signup-name">Name</label><br></br>
          <input type="text" name="signup-name" id="signup-name"></input><br></br>
          <label htmlFor="signup-password">Password</label><br></br>
          <input type="password" name="signup-password" id="signup-password"></input><br></br>
          <label htmlFor="signup-conf">Confirm Password</label><br></br>
          <input type="password" name="signup-conf" id="signup-conf"></input><br></br>
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}


export default HomePage;
