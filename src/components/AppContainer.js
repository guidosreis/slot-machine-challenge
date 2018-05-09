import React from 'react'

import StartButton from './StartButton';
import StopButton from './StopButton'

const AppContainer = ({ running, handleStartClick, handleStopClick }) => (
  <div>
    Running: {running ? 'rodando' : 'parado'}
    <StartButton handleStartClick={handleStartClick} />
    <StopButton handleStopClick={handleStopClick} />
  </div>
)

export default AppContainer
