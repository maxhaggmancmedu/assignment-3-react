import React, { useState } from 'react'
import './coins-active.css'

function CoinState() {

    const [coin, setCoin] = useState();

    const reset = () => {
      setCoin(0)
    }
    
    const rollCoin = () => {

      setCoin(Math.random())

      console.log(coin)
    }
    

    if (coin > 0 && coin <= 0.50) {
      return (
        <>
          <div className='right-div-active'></div>
          <button className='reset' onClick={reset}>Reset</button>
          <button className='flip' onClick={rollCoin}>Flip Coin!</button>
        </>
        )
    } else if (coin > 0.50) {
      return (
        <>
          <div className='left-div-active'></div>
          <button className='reset' onClick={reset}>Reset</button>
          <button className='flip' onClick={rollCoin}>Flip Coin!</button>
        </>
      )
    } else {
      return (
        <>
          <button className='reset' onClick={reset}>Reset</button>
          <button className='flip' onClick={rollCoin}>Flip Coin!</button>
        </>
      ) 
    }
}

export default CoinState



