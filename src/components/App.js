import React, { Component } from 'react'
import * as _ from 'lodash'

import './App.css'
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
      ],
      prize: 0
    }

    this.handleStartClick = this.handleStartClick.bind(this)
    this.handleStopClick = this.handleStopClick.bind(this)
    this.spinInterval
    this.stopTimeout
  }

  componentWillMount() {
    const wheels = this.state.wheels
    const figures = ['strawberry', 'banana', 'orange', 'monkey']
    
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
    this.start()
  }

  handleStopClick() {
    this.stop()
  }

  start() {
    this.setState({ isSpinning: true })
    this.setState({ prize: 0 })
    this.spin()
    this.handleStartSideEffects()
  }

  stop() {
    clearTimeout(this.stopTimeout)
    clearInterval(this.spinInterval)
    this.setState({ isSpinning: false })
    this.checkPrizes()
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
    if (!this.state.initialized) {
      this.setState({ initialized: true })
    }

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

  checkPrizes() {
    const wheels = this.state.wheels
    let prize
    let consecutive = false
    let allTheSame = true
    
    wheels.forEach((wheel, index) => {
      const { activeFigure } = wheel

      if (index > 0) {
        const j = index - 1

        if (activeFigure === wheels[j].activeFigure) {
          consecutive = true
        } else {
          allTheSame = false
        }
      }

      if (index === wheels.length - 1) {
        if (allTheSame) { prize = 1000 }
        else if (consecutive) { prize = 200 }
        else if (activeFigure === wheels[0].activeFigure) { prize = 100 }
        else { prize = 0 }
      }
    })

    this.setState({ prize })
  }

  render() {
    return (
      <AppContainer
        initialized={this.state.initialized}
        isSpinning={this.state.isSpinning}
        prize={this.state.prize}
        wheels={this.state.wheels}
        handleStartClick={this.handleStartClick}
        handleStopClick={this.handleStopClick}
      />
    )
  }
}

export default App
