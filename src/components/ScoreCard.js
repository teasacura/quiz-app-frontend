import React from 'react';

class ScoreCard extends React.Component {
  render() {
    return (
      <div>
        Score!
        <button onClick={this.props.toggleQuiz}>Back to Topic</button>
      </div>
    )
  }
}

export default ScoreCard;
