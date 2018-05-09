import React, { Component } from 'react'

import AppContainer from './AppContainer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      running: false
    }

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleStopClick = this.handleStopClick.bind(this);

    setTimeout(() => {
      if (!this.state.running) {
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
    this.setState({
      running: true
    })

    setTimeout(() => {
      if (this.state.running) {
        this.stop()
      }
    }, 10000)
  }

  stop() {
    this.setState({
      running: false
    })
  }

  render() {
    return (
      <AppContainer
        running={this.state.running}
        handleStartClick={this.handleStartClick}
        handleStopClick={this.handleStopClick}
      />
    )
  }
}

export default App
