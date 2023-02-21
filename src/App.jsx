import React from 'react'
import LeftCoin from './left-coin/left-coin'
import RightCoin from './right-coin/right-coin'
import CoinState  from './Coinstate.jsx'


function App() {
  
  return (
    <div className="background">
        <LeftCoin />
        <RightCoin />
        <CoinState />
    </div>
  )
}

export default App
