import React from 'react';

class ScoreSlider extends React.Component {
  constructor(){
    super()

    this.top = 52.5
  }

  shouldComponentUpdate(nextProps){
    return this.props.currentQ !== nextProps.currentQ
  }

  position(){
    let topChange = this.props.isLastCorrect ? -2.5 : 2.5
    this.top += topChange
    return this.top
    // this.setState(prevState => ({top: prevState.top + topChange}))
  }

  render() {
    const styles = {
      top: `${this.position()}%`,
    };
    return (
      <div id="slider">
        <div id="indicator" style={styles}>
        </div>
      </div>
  )
  }

}

export default ScoreSlider;
