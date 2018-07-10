import React, { Component } from 'react'

import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
import Timer from './Timer'


class QuizOrScore extends Component {

  state = {
    quiz: [],
    currentQ: 0,
    time: 30
  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json())
      .then(resp => this.setState({quiz: resp}))
  }

  nextQ = () => {
    this.setState((prevState) => ({currentQ: ++prevState.currentQ}))
  }

  tick = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({time: --prevState.time}))
    }, 1000)
    setTimeout(() => {
      clearInterval(this.timerId)

    }, 30000)
  }


  render(){
    const {quiz, currentQ, time} = this.state
    return(
      <div>
        { currentQ < 20 && time > 0 ? (
          <div>
            <Timer time={time} tick={this.tick}/>
            <QuestionCard quesObj={quiz[currentQ]} nextQ={this.nextQ} />
          </div>
        ) : (
          <ScoreCard toggleQuiz={this.props.toggleQuiz} restartQuiz={this.props.restartQuiz}/>
        )}

      </div>
    )
  }
}

export default QuizOrScore;
