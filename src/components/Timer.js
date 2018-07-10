import React from "react"

class Timer extends React.Component {
  componentDidMount() {
    this.props.tick()
  }
  render() {
    return (
      <div>
        {this.props.time}
      </div>
    )
  }
}

export default Timer
