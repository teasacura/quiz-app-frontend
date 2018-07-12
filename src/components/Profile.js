import React from 'react'
import withAuth from '../hocs/withAuth'

class Profile extends React.Component {
  constructor(){
    super()

    this.state = {
      password: "",
      msg: "",
      user: {},
      clicked: false,
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
    if (this.state.password.length > 0) {
    this.setState({clicked: false})
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
    } else {
      alert("Enter a valid password")
    }
  }

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render(){
    const clicked = this.state.clicked
    const {username, scores, id} = this.state.user
    return (
      <div id="profile">
        <h1>{username}</h1>
        <h2>High Scores</h2>
        <ul>{ scores ? (
          scores.map(score => {
          return (<li key={score.id}>
            <span>{score.topic}</span>
            <span className="dots">....................................</span>
            <span>{score.score}</span>
          </li>)
        })
      ) : ( null )
      }</ul>

        { clicked ?
          <div>
            <button onClick={this.handleClick}>Close</button>
            <form onSubmit={this.handleSubmit}>
              <label htmlFor="password">New Password</label><br></br>
              <input onChange={this.handleChange} type="text" name="password"></input><br></br>
              <button>Update</button>
            </form>
          </div>
          : <div><button onClick={this.handleClick}>Edit Password</button></div>}
      </div>
    )
  }
}

export default withAuth(Profile)
