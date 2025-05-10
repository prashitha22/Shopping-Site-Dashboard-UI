import React from 'react'
import userIcon from "../assets/images/user-img.svg"
import downArrow from "../assets/images/down-arrow.svg"
import { useState } from 'react'

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
                <img src={downArrow} alt="Down Arrow" />
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