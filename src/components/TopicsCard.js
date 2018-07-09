import React, { Component } from 'react';

class TopicsCard extends Component {

  render() {
    const { title } = this.props.match.params
    const topic = this.props.topics.find(obj => obj.title === title)
    // console.log(this.props.match.params)
    return (
      <div>
          {topic ? (
            <div>
              <h1>{topic.title}</h1>
              <p>{topic.description}</p>
              <ul>
                {topic.scores.map(score => {
                  return <li key={score.user}>{score.score} --- {score.user}</li>
                })}
              </ul>
            </div>
          ) : null}
      </div>
    );
  }
}


export default TopicsCard;
