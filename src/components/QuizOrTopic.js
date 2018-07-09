import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Quiz from './Quiz'
import TopicsCard from './TopicsCard'

class QuizOrTopic extends Component {

  state = {
    isQuiz: false
  }

  startQuiz = () => {
    this.setState({
      isQuiz: !this.state.isQuiz
    }, () => console.log(this.state))
  }

  render(){
    return (
        <div>
          {this.state.isQuiz ? (
            <Quiz />
          ) : (
            <TopicsCard {...this.props} topics={this.props.topics} startQuiz={this.startQuiz}/>
          )}
        </div>
    )
  }
}

export default QuizOrTopic;
