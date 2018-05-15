import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, className, isDisabled, handleClick }) => (
  <button 
    className={className}
    disabled={isDisabled}
    onClick={handleClick}
  >{children}</button>
)

Button.propTypes = {
  className: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default Button
