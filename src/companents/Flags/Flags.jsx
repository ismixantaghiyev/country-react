import React from 'react'
import "./Flags.css"
import Country from '../Country.jsx/Country'


function Flags({ datas, filterDatas, loader,count, color, addCard }) {
    console.log(filterDatas);

    return (
        <>
            <div className='flagAll'>
                {loader && <div className="salam d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                }
                <div className="flags">
                    {filterDatas.slice(0, count).map(item => <Country color={color} key={item.name} {...item} />)}
                </div>
            </div>
            <div className='loadModeBtn'>
                {datas.length >= count && <div>
                    <button onClick={addCard} type="button" className="btn btn-danger">Load More</button>
                </div>}
            </div>
        </>
    )
}

export default Flags