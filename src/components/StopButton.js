import React from 'react'
import PropTypes from 'prop-types'

import './StopButton.css'
import Button from './Button'

const StopButton = ({ isSpinning, handleStopClick }) => (
  <Button 
    className="btn-stop"
    handleClick={handleStopClick}
    isDisabled={!isSpinning}
  >Stop</Button>
)

StopButton.propTypes = {
  isSpinning: PropTypes.bool.isRequired,
  handleStopClick: PropTypes.func.isRequired
}

export default StopButton
