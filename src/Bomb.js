// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {

  handleSeconds = () => {
    if (this.state.secondsLeft === 0) {
      'Boom!'
    } else {
      this.state.secondsLeft
    }
  }

  constructor(props) {
    super()
      this.state = {
        secondsLeft: props.initialCount
      }
  }

  render() {
    const remainingTime = this.state.secondsLeft;
    let remaining;
    if (remainingTime === 0) {
      remaining = 'Boom!'
    } else {
      remaining = `${remainingTime} seconds left before I go boom!`
    }
    return (
      <div>
      {remaining}
      </div>
    )
  }

}
