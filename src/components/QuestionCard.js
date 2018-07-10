import React from 'react';

class QuestionCard extends React.Component {
  render() {
    const {quesObj, nextQ} = this.props
    return (
        <div>
          {quesObj ? (
            <div>
              <h2 dangerouslySetInnerHTML={{__html: quesObj.question}}></h2>
              <ul>{quesObj.answers.map(ans => <li>{ans.answer}</li>)}</ul>
              <button onClick={nextQ}>Next Question</button>
            </div>
          ) : null}
        </div>
    )
  }
}

export default QuestionCard;
