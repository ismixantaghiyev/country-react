import React from 'react'
import "./Search.css"
import { BsSearch } from "react-icons/bs"

function Search({value,setValue, color}) {

    const changeValue = (e) => {
        setValue(e.target.value)
    }
    return (
        <>
            <div className='search'>
                <div className='searchIcon'>
                    <BsSearch />
                </div>
                <input style={color} onChange={changeValue} value={value} type="search" placeholder='Search for a country...' />
            </div>

        </>

    )
}

export default Search