import React, { Component } from 'react'

import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'
import Timer from './Timer'
import SickYeah from './SickYeah'
import ScoreSlider from './ScoreSlider'


class QuizOrScore extends Component {
  constructor(props){
    super(props)
    this.state = {
      quiz: [],
      currentQ: 0,
      time: 60,
      isLastCorrect: false,
      lastAnswer: 60,
      sickYeah: "ok",
      score: 0
    }

    const { title } = props.match.params
    const topic = props.topics.find(obj => obj.title === title)
    this.url = `http://localhost:3000/topics/${topic.id}/questions`
  }

  componentDidMount() {
    fetch(this.url)
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
    let bonus = 6 - (this.state.lastAnswer - this.state.time)
    bonus =  ((bonus < 0) ? 1 : bonus) * answer.correct
    this.sickYeahMsg(bonus)
    let score = this.state.score + (bonus * 100)
    this.setState({
      score,
      isLastCorrect: answer.correct,
      lastAnswer: this.state.time
    })

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

  sickYeahMsg = (num) => {
    let msg;
    switch(num) {
      case 6:
        msg = "You DEFINITELY GUESSED!"
        break;
      case 5:
        msg = "UNREAL!"
        break;
      case 4:
        msg = "SICK!"
        break;
      case 3:
        msg = "YEAH!"
        break;
      case 2:
        msg = "COOOOooool!"
        break;
      case 0:
        msg = "Wrong!"
        break;
      default:
        msg = "Fine"
    }
    this.setState({sickYeah: msg})
  }
  render(){
    const {quiz, currentQ, time, score} = this.state
    console.log(this.state.score);
    return(
      <div>
        { currentQ < 20 && time > 0 ? (
          <div>
            <Timer time={time} tick={this.tick}/>
            <QuestionCard quesObj={quiz[currentQ]} checkAnswer={this.checkAnswer} />
            <SickYeah message={this.state.sickYeah}/>
            <ScoreSlider isLastCorrect={this.state.isLastCorrect} currentQ={this.state.currentQ}/>
          </div>
        ) : (
          <ScoreCard
            killTime={this.killTime}
            score={score}
            toggleQuiz={this.props.toggleQuiz}
            restartQuiz={this.props.restartQuiz}
          />

        )}

      </div>
    )
  }
}

export default QuizOrScore;
