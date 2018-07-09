import React from 'react';
import {NavLink} from 'react-router-dom'

const TopicsList = (props) => {
  console.log(props);
    return (
      <div>
        {props.topics.map(topic => <div key={topic.id}><NavLink to={`/topics/${topic.id}`}>{topic.title}</NavLink></div> )}
      </div>
    )
}



export default TopicsList;
