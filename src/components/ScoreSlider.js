import React from 'react';

class ScoreSlider extends React.Component {
  constructor(){
    super()

    this.state = {
      top: 25
    }
  }

  // position(props.score){
  //   this.setState({
  //
  //   })
  //   props.score / 40
  // }

  render() {
  const styles = {
    top: `${this.state.top}%`,
  };
  return (
    <div id="slider">
      <div id="indicator" style={styles}>
      </div>
    </div>
)
}

//   render(){
//     return (
//       <div>
//         <div>
//           Indicator
//         </div>
//       </div>
//     )
//   }
// }
}

export default ScoreSlider;
