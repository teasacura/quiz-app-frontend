import React from "react"

class AnswerCard extends React.Component {
  state = {
  }
  render() {
    return (
      <li
        onClick={this.props.nextQ}
        dangerouslySetInnerHTML={{__html: this.props.answer.answer}}
      ></li>
    )
  }
}

export default AnswerCard
