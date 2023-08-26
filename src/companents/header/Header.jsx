import React from 'react'
import "./Header.css"
import Logo from './Logo'
import Mode from './Mode'


function Header({ color, setColor }) {
    return (
        <div className='header'>
            <Logo />
            <Mode color={color} setColor={setColor} />
        </div>
    )
}

export default Header