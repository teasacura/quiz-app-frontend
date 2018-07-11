import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

class NavBar extends Component {

  render(){
    const loggedIn = !!this.props.currentUser.id
    const userId = this.props.currentUser.id
    console.log(this.props.currentUser);
    return (
      <div>
        <NavLink
          to="/topics"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Go to TOPICS</NavLink>
        {loggedIn ? (
        <NavLink
          to={`/users/${userId}`}
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Go To PROFILE</NavLink>
        ) : (
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>)
        }
        {loggedIn ? (
          <div
            id="logDiv"
            style={link}
            onClick={this.props.handleLogout}
          >Log Out</div>
        ) : (
          <NavLink
            to="/"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Log In</NavLink>
        )}

      </div>
    )
  }
}

export default NavBar;
