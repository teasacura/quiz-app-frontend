import React from 'react'

class Signup extends React.Component {
  state = {
    user: {
      username: "",
      password: ""
    }
  }

  handleChange = (e) => {
    const newUser = { ...this.state.user, [e.target.name]: e.target.value };
    this.setState({ user: newUser });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(this.state)
    }
    fetch('http://localhost:3000/users', options)
    .then(resp => resp.json())
    .then(user => {
        this.props.handleLogin(user)
    })
  }

  render(){
    const {user} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="ui field">
            <label>Username: </label>
            <input
              name="username"
              value={user.username}
              onChange={this.handleChange}
            />
          </div>
          <div className="ui field">
            <label>Password: </label>
            <input
              name="password"
              type="password"
              value={user.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="ui basic green button">
            Signup
          </button>
        </form>
      </div>
    )
  }
}

export default Signup
