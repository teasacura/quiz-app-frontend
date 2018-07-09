import React, { Component } from 'react'

class Topics extends Component {
  state = {
    topics: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/topics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(r => r.json()).then(console.log)
  }

  render(){
    return (
      <div>

      </div>
    )
  }
}

export default Topics;
