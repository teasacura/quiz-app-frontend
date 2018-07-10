import React from 'react';
import AnswerCard from "./AnswerCard"
class QuestionCard extends React.Component {
  shouldComponentUpdate(nextProps) {
    return this.props.quesObj !== nextProps.quesObj
  }

  render() {
    const {quesObj, checkAnswer} = this.props
    return (
        <div>
          {quesObj ? (
            <div>
              <h2 dangerouslySetInnerHTML={{__html: quesObj.question}}></h2>
              <ul>
                {this.props.quesObj.answers
                  .map(ans => <AnswerCard answer={ans} checkAnswer={checkAnswer}/>)
                }
              </ul>
            </div>
          ) : null}
        </div>
    )
  }
}

export default QuestionCard;
