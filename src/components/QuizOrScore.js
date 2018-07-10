import React, { Component } from 'react'

import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
import Timer from './Timer'


class QuizOrScore extends Component {

  state = {
    quiz: [],
    currentQ: 0,
    time: 60,
    answers: [],
    score: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json())
      .then(resp => {
        this.setState({quiz: resp})
        return resp
      })
      .then(console.log)
  }

  nextQ = () => {
    this.setState((prevState) => ({currentQ: ++prevState.currentQ}))
  }
  checkAnswer = (answer) => {
    console.log(answer);
    if (answer.correct) {
      this.setState(prevState => {
        return {score: prevState.score + 1}
      })
    }
    this.nextQ()
  }

  tick = () => {
    this.timerId = setInterval(() => {
      this.setState(prevState => ({time: --prevState.time}))
    }, 1000)
    setTimeout(() => {
      clearInterval(this.timerId)
    }, 60000)
  }

  killTime = () => {
    clearInterval(this.timerId)
  }
  //
  // isCorrect = (answerChoice) => {
  //   if (answer) {
  //     this.setState
  //   }
  // }

  render(){
    const {quiz, currentQ, time} = this.state
    return(
      <div>
        { currentQ < 20 && time > 0 ? (
          <div>
            <Timer time={time} tick={this.tick}/>
            <QuestionCard quesObj={quiz[currentQ]} checkAnswer={this.checkAnswer} />
          </div>
        ) : (
          <ScoreCard
            killTime={this.killTime}
            toggleQuiz={this.props.toggleQuiz}
            restartQuiz={this.props.restartQuiz}
          />

        )}

      </div>
    )
  }
}

export default QuizOrScore;
