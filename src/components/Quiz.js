import React, { Component } from 'react'

class Quiz extends Component {

  state = {
    quiz: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/questions')
      .then(resp => resp.json())
      .then(resp => this.setState({quiz: resp}))
  }

  render(){
    console.log(this.state)
    return (
        <div>
          {this.state.quiz.map(quesObj => {
            return <h2 dangerouslySetInnerHTML={{__html: quesObj.question}}></h2>
          }
        )}
        </div>
    )
  }
}

export default Quiz;
