import React from 'react';
import {NavLink} from 'react-router-dom'
import withAuth from '../hocs/withAuth'

const TopicsList = (props) => {
  console.log(props);
    return (
      <div id="topics">
        <h2>Quiz Topics</h2>
        {props.topics
          .map(topic => {
            return (
              <div key={topic.id}>
                <NavLink to={`/topics/${topic.title}`}>
                  {topic.title}
                </NavLink>
              </div>
            )
          })
        }
      </div>
    )
}



export default withAuth(TopicsList);
