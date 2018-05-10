import React from 'react'
import PropTypes from 'prop-types'

import StartButton from './StartButton'
import StopButton from './StopButton'

const AppContainer = ({
  initialized,
  isSpinning,
  prize,
  wheels,
  handleStartClick,
  handleStopClick
}) => (
  <div>
    { wheels.map((wheel, index) => (
      <div key={index}>
        {wheel.activeFigure}
      </div>
    )) }
    { !!prize && 
      <h2>You win U$ {prize},00! :D</h2> 
    }
    { !!initialized && !isSpinning && !prize && 
      <h2>You lose! :(</h2> 
    }
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
  initialized: PropTypes.bool.isRequired,
  isSpinning: PropTypes.bool.isRequired,
  prize: PropTypes.number.isRequired,
  wheels: PropTypes.array.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleStopClick: PropTypes.func.isRequired
}

export default AppContainer
