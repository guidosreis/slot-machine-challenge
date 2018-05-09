import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, isDisabled, handleClick }) => (
  <button 
    disabled={isDisabled}
    onClick={handleClick}
  >{children}</button>
)

Button.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button
