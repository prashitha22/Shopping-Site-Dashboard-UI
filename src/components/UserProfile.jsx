import React from 'react'
import userIcon from "../assets/images/user-img.svg"
import { useState } from 'react'
import svgSprite from "../assets/images/svg-sprite.svg"

const UserProfile = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <>
            <div className="header-user-profile" onClick={handleDropdown}>
                <div className="user-img">
                    <img src={userIcon} alt="User Icon" />
                </div>
                <span className="user-name">John Paul</span>
                <svg width="9" height="5" fill='none'>
                    <use href={`${svgSprite}#icon-down-arrow`}></use>
                </svg>
                <div className={`dropdown-menu user-menu ${isDropdownOpen ? "open" : ""}`} style={{ display: "none" }}>
                    <ul>
                        <li>Profile</li>
                        <li>Logout</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default UserProfile