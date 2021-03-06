import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'

class LoginForm extends Component {

  state = {
    fields: {
      username: '',
      password: ''
    }
  };

  handleChange = (e) => {
    const newFields = { ...this.state.fields, [e.target.name]: e.target.value };
    this.setState({ fields: newFields });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state.fields)
    }
    fetch('https://quiz-app-etm.herokuapp.com/api/v1/login', options)
    .then(resp => resp.json())
    .then(user => {
        this.props.handleLogin(user)
    })

  };

  render() {
    const { fields } = this.state;
    return (
      <div>
        { this.props.loggedIn ? <Redirect to="/topics" /> :
        (<form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>Username: </label>
            <input
              name="username"
              value={fields.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Password: </label>
            <input
              name="password"
              type="password"
              value={fields.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="ui basic green button">
            Login
          </button>
          <Link to="/signup" >Need to sign up?</Link>
        </form>)
      }
      </div>
    );
  }
}

export default LoginForm;
