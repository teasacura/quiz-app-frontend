import React from "react"

class AnswerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: props.answer.correct
    }
  }
  render() {
    return (
      <div>
      <li

        onClick={() => this.props.checkAnswer(this.props.answer)}
        dangerouslySetInnerHTML={{__html: this.props.answer.answer}}
      ></li>
      <h1>{this.props.answer.correct.toString()}</h1>
      </div>
    )
  }
}

export default AnswerCard
