import React, { useEffect, useState } from 'react'
import Search from "../components/Search"
import ScoreCard from '../components/ScoreCard'
import UserProfile from "../components/UserProfile"
import svgSprite from "../assets/images/svg-sprite.svg"

const Header = ({isSidebarVisible, setIsSidebarVisible}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // for dropdown
    const [direction, setDirection] = useState("ltr");  // for direction
    const [currentLanguage, setCurrentLanguage] = useState("EN");  // change language text content

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleDirection = (newDirection, newLanguage) => {
        setDirection(newDirection);
        setCurrentLanguage(newLanguage);
        setIsDropdownOpen(false);
    }

    useEffect(() => {  // adding rtl to the body when direction is rtl
        document.body.classList.remove("ltr", "rtl");
        document.body.classList.add(direction);
    }, [direction]);

    useEffect(() => {  // handling sidebar opening and closing
        const sidebar = document.querySelector(".sidebar");

        if (sidebar & isSidebarVisible) {
            sidebar.classList.add("open");
        }
    }, []);

    return (
        <>
            <header className="header-section">
                <div className="header-left">
                    <div className="mobile-menu-icon" style={{ display: "none" }} onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                    <svg width="24" height="24">
                        <use href={`${svgSprite}#icon-menu-burger`}></use>
                    </svg>
                    </div>
                    <h2 className="header-title">Hi, John!</h2>
                </div>
                <div className="header-right">
                    <div className="web-active">
                        <Search />
                    </div>
                    <div className="web-active">
                        <ScoreCard />
                    </div>
                    <div className="shopping-icons">
                        <svg width="24" height="24" fill='none'>
                            <use href={`${svgSprite}#icon-heart-icon`}></use>
                        </svg>
                        <div className="cart">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-cart-icon`}></use>
                            </svg>
                            <span className="cart-notify"></span>
                        </div>
                        <div className="language-icon">
                            <div className={`language-content ${isDropdownOpen ? "open" : ""}`} onClick={handleDropdown}>
                                <span className="language">{currentLanguage}</span>
                                <svg width="9" height="5" fill='none'>
                                    <use href={`${svgSprite}#icon-down-arrow`}></use>
                                </svg>
                            </div>
                            <div className={`dropdown-menu language-menu ${isDropdownOpen ? "open" : ""}`} style={{ display: "none" }}>
                                <ul>
                                    <li onClick={() => handleDirection("ltr", "EN")}>EN</li>
                                    <li onClick={() => handleDirection("rtl", "AR")}>AR</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <UserProfile />
                </div>
            </header>
        </>
    )
}

export default Header