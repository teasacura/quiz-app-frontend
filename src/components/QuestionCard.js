import React from 'react';
import AnswerCard from "./AnswerCard"
class QuestionCard extends React.Component {
  render() {
    const {quesObj, nextQ} = this.props
    return (
        <div>
          {quesObj ? (
            <div>
              <h2 dangerouslySetInnerHTML={{__html: quesObj.question}}></h2>
              <ul>
                {this.props.quesObj.answers
                  .map(ans => <AnswerCard answer={ans} nextQ={nextQ}/>)
                }
              </ul>
            </div>
          ) : null}
        </div>
    )
  }
}

export default QuestionCard;
