import React from 'react'
import svgSprite from "../assets/images/svg-sprite.svg"

const Search = () => {
    return (
        <>
            <div className="search">
                <svg width="24" height="24" fill='none' className='search-icon'>
                    <use href={`${svgSprite}#icon-search-icon`}></use>
                </svg>
                <input className='search-input' type="text" placeholder="Search for products, brands and more" />
            </div>
        </>
    )
}

export default Search