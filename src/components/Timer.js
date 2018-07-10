import React from "react"

class Timer extends React.Component {
  render() {
    return (
      <div>
        {this.props.time}
      </div>
    )
  }
}

export default Timer
