import React from 'react'

class Profile extends React.Component {
  render(){
    const {username, scores} = this.props.currentUser
    return (
      <div>
        <h1>{this.props.currentUser.username}</h1>
        <ul>{ scores ? (
          scores.map(score => {
          return <li key={score.id}>{score.topic}---{score.score}</li>
        })
      ) : ( null )
      }</ul>
        <form>
          <label htmlFor="password">Current Password</label><br></br>
          <input type="text" name="password"></input><br></br>
          <label htmlFor="password-confirmation">New Password</label><br></br>
          <input type="text" name="password-confirmation"></input><br></br>
          <button>Update</button>
        </form>
      </div>
    )
  }
}

export default Profile
