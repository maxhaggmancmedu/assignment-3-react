import { React, useState } from 'react'
import '../index.css'
import './right-coin.css'
import TextComponentRight from './text-component-right'
import YellowTrianglesRight from './yellow-triangles-right'
import {randomNumber} from '../Coinstate.jsx'

import { ActiveBackground } from '../Coinstate.jsx'
 
function RightCoin (isActive) {

    const [active] = useState();

    function activeClass () {
        if (randomNumber === 2) {
            return 'active'
        }
    }   

    return (
        <div className={`right-coin-main-div ${activeClass(isActive)}`}>
            <YellowTrianglesRight />
            <TextComponentRight />
        </div>
    )   
}

export default RightCoin