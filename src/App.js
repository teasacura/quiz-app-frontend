import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import NavBar from './components/NavBar'
// import Topics from './components/Topics'
import QuizOrTopic from './components/QuizOrTopic'
import TopicsList from './components/TopicsList'
import Profile from './components/Profile'
import clock from './images/clock.jpg'
import './App.css';

class App extends Component {
  state = {
    topics: [],
    auth: {
      currentUser: {}
    }
  }

  componentDidMount(){
    fetch("http://localhost:3000/topics", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(r => r.json())
      .then(res => this.setState({
        topics: res
      }, () => console.log(this.state))
    );

    const token = localStorage.getItem('token')
    if (token) {
      const options =   {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': token
        }
      }
      fetch(`http://localhost:3000/users/${token}`, options)
      .then(resp => resp.json())
      .then(user => {
        this.setState({
          auth: {
            currentUser: user
          }
        })

      })
    }

  }

  fetchTopic = (id) => {
    fetch(`http://localhost:3000/topics/${id}`)
      .then(r => r.json())
      .then(topic => {
        let topics = [...this.state.topics]
        const oldTopic = topics.find(oldTopic => oldTopic.id === topic.id)
        console.log(oldTopic)
        console.log(topic)
        topics[topics.indexOf(oldTopic)] = topic
        this.setState({topics}, () => console.log(this.state.topics))
      })
  }

  handleLogin = (user) => {
   this.setState({
       auth: {
         currentUser: user
       }
     }, () => {
       localStorage.setItem('token', user.id)
     })
  }

   handleLogout = () => {
     console.log('hello');
     this.setState({
       auth: {
         currentUser: {}
       }
     })
     localStorage.clear()
   }

  render() {
    return (
      <Router>
        <div>
          <NavBar currentUser={this.state.auth.currentUser} handleLogout={this.handleLogout}/>

          <Route exact path="/" render={() => <HomePage handleLogin={this.handleLogin}/>}/>
          <Route
            exact path="/topics/:title"
            render={ (props) => <QuizOrTopic {...props} topics={this.state.topics} fetchTopic={this.fetchTopic}/> }/>
           <Route exact path="/topics" render={(props) => <TopicsList {...props} topics={this.state.topics} />}/>
           <Route exact path="/users/:id" render={(props) => <Profile currentUser={this.state.auth.currentUser} {...props}/>} />
                <img id="clock" src={clock} />
        </div>

      </Router>
    );
  }
}

export default App;
// I took out main here
