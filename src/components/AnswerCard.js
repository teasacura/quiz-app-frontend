import React from "react"

class AnswerCard extends React.Component {

  render() {
    return (
      <div>
      <ul>
        {this.props.quesObj.answers
          .map(ans => {
            return <li dangerouslySetInnerHTML={{__html: ans.answer}}></li>
          })
        }
      </ul>
      <button onClick={this.props.nextQ}>Next Question</button>
      </div>
    )
  }
}

export default AnswerCard
