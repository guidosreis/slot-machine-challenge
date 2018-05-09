import React from 'react'
import PropTypes from 'prop-types'

import StartButton from './StartButton'
import StopButton from './StopButton'

const AppContainer = ({ isSpinning, wheels, handleStartClick, handleStopClick }) => (
  <div>
    { wheels.map((wheel, index) => <div key={index}>{wheel.activeFigure}</div>) }
    Running: {isSpinning ? 'rodando' : 'parado'}
    <div>
      <StartButton
        isSpinning={isSpinning}
        handleStartClick={handleStartClick}
      />
      <StopButton
        isSpinning={isSpinning}
        handleStopClick={handleStopClick}
      />
    </div>
  </div>
)

AppContainer.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
  wheels: PropTypes.array.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired
}

export default AppContainer
