import React from 'react'
import './right-coin.css'
import TextComponentRight from './text-component-right'
import YellowTrianglesRight from './yellow-triangles-right'
 
function RightCoin () { 
    return (
        <div className='right-coin-main-div'>
            <YellowTrianglesRight />
            <TextComponentRight />
        </div>
    )   
}

export default RightCoin