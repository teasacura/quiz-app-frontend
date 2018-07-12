import React from 'react'
import withAuth from '../hocs/withAuth'

class Profile extends React.Component {
  constructor(){
    super()

    this.state = {
      password: "",
      msg: "",
      user: {}
    }
  }


  componentDidMount(){
    this.fetchUser(this.props.currentUser.id)
  }

  fetchUser(id){
    fetch(`http://localhost:3000/users/${id}`)
      .then(r => r.json())
      .then(res => this.setState({
        user: res
      }))
  }

  handleChange = (e) => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { id } = this.props.currentUser

    let data = {
      password: this.state.password,
      id: id
    }

    const options = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    }
    fetch(`http://localhost:3000/users/${id}`, options)
      .then(r => r.json())
      .then(msg => alert(msg.msg))
  }

  render(){
    const {username, scores, id} = this.state.user
    return (
      <div>
        <h1>{username}</h1>
        <ul>{ scores ? (
          scores.map(score => {
          return <li key={score.id}>{score.topic}---{score.score}</li>
        })
      ) : ( null )
      }</ul>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="password">New Password</label><br></br>
          <input onChange={this.handleChange} type="text" name="password"></input><br></br>
          <button>Update</button>
        </form>
      </div>
    )
  }
}

export default withAuth(Profile)
