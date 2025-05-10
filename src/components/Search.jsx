import React from 'react'
import searchIcon from '../assets/images/search-icon.svg'

const Search = () => {
    return (
        <>
            <div className="search">
                <img className="search-icon" src={searchIcon} alt="Search Icon" />
                <input className='search-input' type="text" placeholder="Search for products, brands and more" />
            </div>
        </>
    )
}

export default Search