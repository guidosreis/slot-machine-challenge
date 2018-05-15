import React from 'react'
import PropTypes from 'prop-types'

import './Wheels.css'

const Wheels = ({ wheels }) => (
  <div className="wheels">
    { wheels.map((wheel, index) => (
      <div key={index} className="wheel">
        <span className={'sprite sprite-'+wheel.activeFigure} />
      </div>
    )) }
  </div>
)

Wheels.propTypes = {
  wheels: PropTypes.array.isRequired
}

export default Wheels
