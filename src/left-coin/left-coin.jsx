import React from 'react'
import '../index.css'
import './left-coin.css'
import YellowTriangles from './yellow-triangles-left'
import TextComponentLeft from './text-component-left'
 
function LeftCoin () {
 return (
    <div className='left-coin-main-div'>
      <TextComponentLeft />
      <YellowTriangles />
    </div>
 )   
}

export default LeftCoin