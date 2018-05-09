import React from 'react'
import PropTypes from 'prop-types'

import Button from './Button'

const StartButton = ({ isSpinning, handleStartClick }) => (
  <Button
    handleClick={handleStartClick}
    isDisabled={isSpinning}
  >Start</Button>
)

StartButton.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired
}

export default StartButton
