import React, { Component } from 'react'

import AppContainer from './AppContainer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isSpinning: false
    }

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);
  }
  
  componentDidMount() {
    setTimeout(() => {
      if (!this.state.isSpinning) {
        this.start()
      }
    }, 5000)
  }

  handleStartClick() {
    this.start()
  }

  handleStopClick() {
    this.stop()
  }

  start() {
    this.setState({ isSpinning: true })

    setTimeout(() => {
      if (this.state.isSpinning) {
        this.stop()
      }
    }, 10000)
  }

  stop() {
    this.setState({ isSpinning: false })
  }

  render() {
    return (
      <AppContainer
        isSpinning={this.state.isSpinning}
        handleStartClick={this.handleStartClick}
        handleStopClick={this.handleStopClick}
      />
    )
  }
}

export default App
