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
        <NavLink
          to="/users"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Go To PROFILE</NavLink>
        <NavLink
          to="/"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >Home</NavLink>
        <NavLink
          to="/topics"
          exact
          style={link}
          activeStyle={{
            background: 'darkblue'
          }}
        >{loggedIn ? "Logged In" : "Logged Out"}</NavLink>
      </div>
    )
  }
}

export default NavBar;
