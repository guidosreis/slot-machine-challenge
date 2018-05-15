import React from 'react'
import PropTypes from 'prop-types'

import Wheels from './Wheels'
import Controls from './Controls'

const AppContainer = ({
  initialized,
  isSpinning,
  prize,
  wheels,
  handleStartClick,
  handleStopClick
}) => (
  <div>
    <Wheels wheels={wheels} />
    {/*
    { !!prize && 
      <h2>You win U$ {prize},00!</h2> 
    }
    { !!initialized && !isSpinning && !prize && 
      <h2>You lose!</h2> 
    }
    */}
    <Controls
      isSpinning={isSpinning}
      handleStartClick={handleStartClick}
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
