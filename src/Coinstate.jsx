import React, { useState, useEffect } from 'react'

function CoinState() {

    
    const [coin, setCoin] = useState(Math.random());
    
    const rollCoin = () => {
      let randomNumber;

      setCoin(Math.random())

      
      
      
    
      /*
      window.onkeypress = function(event) {
        if (event.which == 32) {
          console.log(event);
          randomNumber = Math.random();
          console.log(randomNumber)
        

      }
      */
      if (coin <= 0.50) {
        randomNumber = 1;
      } else if (coin > 0.50) {
        randomNumber = 2;
      }
      console.log(randomNumber)
      console.log(coin);
    }
    
    

    



    return (
      
        <button onClick={rollCoin}>Flip Coin!</button>
      
      
      
      )
      
    
  }

  function ActiveBackground () {

    const getClass = () => {
      if (randomNumber === 2) {
        return 'active'
      }
    }
    

    return (
      
      <div className={`right-coin-main-div ${getClass()}`}></div>
    )
  }

  
  
export {CoinState , ActiveBackground} 

export let randomNumber

