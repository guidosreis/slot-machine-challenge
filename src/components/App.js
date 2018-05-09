import React, { Component } from 'react'
import * as _ from 'lodash'

import AppContainer from './AppContainer'

class App extends Component {
  constructor() {
    super()

    this.state = {
      initialized: false,
      isSpinning: false,
      wheels: [
        {
          figures: [],
          activeFigure: null
        },
        {
          figures: [],
          activeFigure: null
        },
        {
          figures: [],
          activeFigure: null
        }
      ]
    }

    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
    this.spinInterval
    this.stopTimeout
  }

  componentWillMount() {
    const wheels = this.state.wheels
    const figures = ['strawberry', 'banana', 'orange']
    
    for (let i = 0; i < wheels.length; i++) {
      const wheel = wheels[i]
      const shuffled = _.shuffle(figures)

      wheel.figures = shuffled
      wheel.activeFigure = shuffled[0]
    }

    this.setState({ wheels })
  }
  
  componentDidMount() {
    setTimeout(() => {
      if (!this.state.initialized && !this.state.isSpinning) {
        this.start()
      }
    }, 5000)
  }

  handleStartClick() {
    if (!this.state.initialized) {
      this.setState({ initialized: true })
    }

    this.start()
  }

  handleStopClick() {
    this.stop()
  }

  start() {
    this.setState({ isSpinning: true })
    this.spin()
    this.handleStartSideEffects()
  }

  stop() {
    clearTimeout(this.stopTimeout)
    clearInterval(this.spinInterval)
    this.setState({ isSpinning: false })
  }

  spin() {
    this.spinInterval = setInterval(() => {
      const wheels = this.state.wheels

      for (let i = 0; i < wheels.length; i++) {
        const wheel = wheels[i]
        const nextFigure = this.getNextFigure(wheel)

        wheel.activeFigure = nextFigure
      }

      this.setState({ wheels })
    }, 50)
  }
  
  handleStartSideEffects() {
    this.stopTimeout = setTimeout(() => {
      if (this.state.isSpinning) {
        this.stop()
      }
    }, 10000)
  }

  getNextFigure({ activeFigure, figures }) {
    const i = figures.indexOf(activeFigure)
    const j = i + 1 < figures.length ? i + 1 : 0

    return figures[j]
  }

  render() {
    return (
      <AppContainer
        isSpinning={this.state.isSpinning}
        wheels={this.state.wheels}
        handleStartClick={this.handleStartClick}
        handleStopClick={this.handleStopClick}
      />
    )
  }
}

export default App
