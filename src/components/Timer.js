import React from "react"

class Timer extends React.Component {
  componentDidMount() {
    this.props.tick()
  }
  render() {
    return <h1 id="timer">{this.props.time}</h1>
  }
}

export default Timer
