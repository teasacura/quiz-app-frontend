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
      <li
        onClick={() => this.props.checkAnswer(this.props.answer)}
        dangerouslySetInnerHTML={{__html: this.props.answer.answer}}
      ></li>
    )
  }
}

export default AnswerCard
