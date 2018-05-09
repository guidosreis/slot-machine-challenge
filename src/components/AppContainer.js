import React from 'react'
import PropTypes from 'prop-types'

import StartButton from './StartButton'
import StopButton from './StopButton'

const AppContainer = ({ isSpinning, handleStartClick, handleStopClick }) => (
  <div>
    Running: {isSpinning ? 'rodando' : 'parado'}
    <StartButton
      isSpinning={isSpinning}
      handleStartClick={handleStartClick}
    />
    <StopButton
      isSpinning={isSpinning}
      handleStopClick={handleStopClick}
    />
  </div>
)

AppContainer.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired
}

export default AppContainer
