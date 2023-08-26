import React, { useState } from 'react'
import { BsFillMoonFill } from 'react-icons/bs';
import { BsFillSunFill } from 'react-icons/bs';


function Mode({ setColor }) {
    const [mode, setMode] = useState(true)
    const changeMode = () => {
        setMode(!mode)
        setColor(mode ? { backgroundColor: "#2B3945", color: "white" } : { backgroundColor: "white", color: "#2B3945" })
    }
    return (
        <div className='mode' onClick={changeMode}>
            <div className="icon">
                {mode ? <div><BsFillMoonFill /> Dark Mode</div> : <div><BsFillSunFill /> Light Mode</div>}
            </div>
            <h2>{mode}</h2>
        </div>
    )
}

export default Mode