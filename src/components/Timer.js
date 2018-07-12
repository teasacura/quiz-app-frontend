import React from "react"

class Timer extends React.Component {
  componentDidMount() {
    this.props.tick()
  }
  render() {
    return <div id="timer-div"><h1 id="timer">{this.props.time}</h1></div>
  }
}

export default Timer
