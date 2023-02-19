import React from 'react'
import './index.css'
import LeftCoin from './left-coin/left-coin'
import RightCoin from './right-coin/right-coin'
import {CoinState, randomNumber}  from './Coinstate'

function App() {
  console.log(CoinState)
  console.log(randomNumber)
  return (
    <div className="background">
        <LeftCoin />
        <RightCoin />
        <CoinState />
    </div>
  )
}

export default App
