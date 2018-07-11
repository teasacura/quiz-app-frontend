import React from 'react';

class ScoreCard extends React.Component {
  componentDidMount() {
    this.props.killTime()
    const data = {
      score: {
        user_id: parseInt(localStorage.token, 10),
        topic_id: this.props.topicId,
        score: this.props.score
      }
    }
    const options = {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    }

    fetch('http://localhost:3000/scores', options)
      .then(r => r.json())
      .then(r => this.props.fetchTopic(this.props.topicId))
  }

  render() {
    return (
      <div>
        {this.props.score}
        <button onClick={this.props.toggleQuiz}>Back to Topic</button>
        <button onClick={this.props.restartQuiz}>Play Again</button>
      </div>
    )
  }
}

export default ScoreCard;
