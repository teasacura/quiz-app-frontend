import React, { Component } from 'react'

import QuestionCard from './QuestionCard'
import ScoreCard from './ScoreCard'

class QuizOrScore extends Component {

  state = {
    quiz: [],
    currentQ: 0
  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json())
      .then(resp => this.setState({quiz: resp}))
  }

  nextQ = () => {
    this.setState((prevState) => ({currentQ: ++prevState.currentQ}))
  }

  render(){
    const {quiz, currentQ} = this.state
    return(
      <div>
        { currentQ < 20 ? (
          <QuestionCard quesObj={quiz[currentQ]} nextQ={this.nextQ} />
        ) : (
          <ScoreCard toggleQuiz={this.props.toggleQuiz}/>
        )}

      </div>
    )
  }
}

export default QuizOrScore;
