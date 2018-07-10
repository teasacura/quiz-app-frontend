import React, { Component } from 'react';

class TopicsCard extends Component {
  render() {
    const { title } = this.props.match.params
    const topic = this.props.topics.find(obj => obj.title === title)
    return (
      <div>
          {topic ? (
            <div>
              <h1>{topic.title}</h1>
              <p>{topic.description}</p>
              <ul>
                {topic.scores.map(score => {
                  console.log(score.id)
                  return <li key={score.id}>{score.score} --- {score.user}</li>
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
