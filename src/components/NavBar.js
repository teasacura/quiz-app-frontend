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
    console.log("NavBar", (loggedIn === true));
    const userId = this.props.currentUser.id
    return (
      <div id="nav">
        <NavLink
          to="/"
          exact
          className="nav-link"
          id="site-name"
        >20 Questions</NavLink>
        <NavLink
          to="/topics"
          exact
          className="nav-link"
        >topics</NavLink>
        {loggedIn ? (
        <NavLink
          to={`/users/${userId}`}
          exact
          className="nav-link"
        >profile</NavLink>
        ) : null}

        {loggedIn ? (
          <a
            id="log-div"
            onClick={this.props.handleLogout}
            className="nav-link"
          >log out</a>
        ) : (
          <NavLink
            to="/"
            id="log-div"
            exact
            className="nav-link"
          >log in</NavLink>
        )}

      </div>
    )
  }
}

export default NavBar;

         // <NavLink
          // to="/"
          // exact
          // className="nav-link"
        // >Home</NavLink>}
