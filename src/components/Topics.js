import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import TopicsList from './TopicsList'
import TopicsCard from './TopicsCard'

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
      .then(r => r.json())
      .then(res => this.setState({
        topics: res
      }, () => console.log(this.state))
    )

  }


  render(){

    return (
      <Router>
        <div>
          <Route
            exact path="/topics/:title"
            render={ (props) => <TopicsCard {...props} topics={this.state.topics} /> }/>
           <Route exact path="/topics" render={(props) => <TopicsList {...props} topics={this.state.topics} />}/>
        </div>
      </Router>
    )
  }
}

export default Topics;
