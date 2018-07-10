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
              <AnswerCard quesObj={quesObj} nextQ={nextQ}/>
            </div>
          ) : null}
        </div>
    )
  }
}

export default QuestionCard;
