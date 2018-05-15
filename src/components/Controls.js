import React from 'react'
import PropTypes from 'prop-types'

import './Controls.css'
import StartButton from './StartButton'
import StopButton from './StopButton'

const Controls = ({ isSpinning, handleStartClick, handleStopClick }) => (
  <div className="controls">
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

Controls.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired
}

export default Controls
