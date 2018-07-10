import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import QuizOrScore from './QuizOrScore'
import TopicsCard from './TopicsCard'

class QuizOrTopic extends Component {

  state = {
    isQuiz: false
  }

  toggleQuiz = () => {
    this.setState((prevState) => ({
      isQuiz: !prevState.isQuiz
    }))
  }
  restartQuiz = () => {
    console.log(this.state);
    this.setState({isQuiz: false}, () => this.setState({isQuiz:true}))
  }

  render(){
    return (
        <div>
          {this.state.isQuiz ? (
            <QuizOrScore toggleQuiz={this.toggleQuiz} restartQuiz={this.restartQuiz}/>
          ) : (
            <TopicsCard {...this.props} topics={this.props.topics} toggleQuiz={this.toggleQuiz}/>
          )}
        </div>
    )
  }
}

export default QuizOrTopic;
