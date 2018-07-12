import React, { Component } from 'react';

class TopicsCard extends Component {
  render() {
    const { title } = this.props.match.params
    const topic = this.props.topics.find(obj => obj.title === title)
    return (
      <div id="topic">
        {topic ? (
          <div>
            <h2>{topic.title}</h2>
            <p>{topic.description}</p>
            <ul>
              {topic.scores.map(score => {
                return (<li key={score.id}>
                  {score.username}
                  <span className="dots">....................................</span>
                  <span>{score.score}</span>
                </li>)
              })}
            </ul>
            <button onClick={this.props.toggleQuiz}>START QUIZ!</button>
          </div>
        ) : null}
      </div>
    );
  }
}


export default TopicsCard;
