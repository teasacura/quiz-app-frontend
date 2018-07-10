import React from 'react';

class ScoreCard extends React.Component {
  componentDidMount() {
    this.props.killTime()
  }
  render() {
    return (
      <div>
        Score!
        <button onClick={this.props.toggleQuiz}>Back to Topic</button>
        <button onClick={this.props.restartQuiz}>Play Again</button>
      </div>
    )
  }
}

export default ScoreCard;
