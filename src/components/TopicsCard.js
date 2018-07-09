import React, { Component } from 'react';

class TopicsCard extends Component {

  render() {
    const { id } = this.props.match.params
    const topic = this.props.topics.find(obj => obj.id === parseInt(id))
    // console.log(this.props.match.params)
    return (
      <div>
        <h1>
          {topic ? (
            <h1>{topic.title}</h1>
          ) : null}
        </h1>
      </div>
    );
  }
}


export default TopicsCard;
