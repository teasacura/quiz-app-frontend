import React from "react"

class AnswerCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: props.answer.correct
    }
  }
  render() {
    console.log(this.state);
    return (
      <li
        onClick={this.props.nextQ}
        dangerouslySetInnerHTML={{__html: this.props.answer.answer}}
      ></li>
    )
  }
}

export default AnswerCard
