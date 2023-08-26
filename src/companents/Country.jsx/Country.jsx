import React from 'react'
import "./Country.css"

function Country({ name, capital, region, population, flags, color}) {
    
    return (
        <div className="card" style={color}>
            <img src={flags.svg} className="card-img-top h-100" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Capital: {capital}</p>
                <p className="card-text">Population: {population}</p>
                <p className="card-text">Region: {region}</p> 
            </div>
        </div>
    )
}

export default Country