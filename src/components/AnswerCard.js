import React from "react"

class AnswerCard extends React.Component {

  render() {
    return (
      <div>
      <ul>{this.props.quesObj.answers.map(ans => <li>{ans.answer}</li>)}</ul>
      <button onClick={this.props.nextQ}>Next Question</button>
      </div>
    )
  }
}

export default AnswerCard
