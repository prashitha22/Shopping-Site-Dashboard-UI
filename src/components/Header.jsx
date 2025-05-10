import React, { useEffect, useState } from 'react'
import Search from "../components/Search"
import ScoreCard from '../components/ScoreCard'
import heartIcon from "../assets/images/heart-icon.svg"
import cartIcon from "../assets/images/cart-icon.svg"
import downArrow from "../assets/images/down-arrow.svg"
import UserProfile from "../components/UserProfile"
import menuIcon from "../assets/images/menu-burger.svg"

const Header = ({isSidebarVisible, setIsSidebarVisible}) => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [direction, setDirection] = useState("ltr");
    const [currentLanguage, setCurrentLanguage] = useState("EN");

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const handleDirection = (newDirection, newLanguage) => {
        setDirection(newDirection);
        setCurrentLanguage(newLanguage);
        setIsDropdownOpen(false);
    }

    useEffect(() => {
        document.body.classList.remove("ltr", "rtl");
        document.body.classList.add(direction);
    }, [direction]);

    useEffect(() => {
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
                        <img src={menuIcon} alt="Burger Icon" />
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
                        <img src={heartIcon} alt="Heart Icon" />
                        <div className="cart">
                            <img src={cartIcon} alt="Cart Icon" />
                            <span className="cart-notify"></span>
                        </div>
                        <div className="language-icon">
                            <div className={`language-content ${isDropdownOpen ? "open" : ""}`} onClick={handleDropdown}>
                                <span className="language">{currentLanguage}</span>
                                <img src={downArrow} alt="arrow" />
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