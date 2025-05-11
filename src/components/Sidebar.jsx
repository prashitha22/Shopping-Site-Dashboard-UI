import svgSprite from "../assets/images/svg-sprite.svg"


const Sidebar = ({isSidebarVisible, setIsSidebarVisible}) => {

    return (
        <>
            <aside className={`sidebar ${isSidebarVisible ? "open" : ""}`}>
                <div className="logo" >
                    <svg width="32" height="32" onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
                        <use href={`${svgSprite}#icon-logo`}></use>
                    </svg>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li className="menu-item">
                            <svg width="28" height="28">
                                <use href={`${svgSprite}#icon-member-icon`}></use>
                            </svg>
                            <span className="menu-text">Member</span>
                        </li>
                        <li className="menu-item active">
                            <svg width="28" height="28" fill="none">
                                <use href={`${svgSprite}#icon-dashboard-icon`}></use>
                            </svg>
                            <span className="menu-text">Dashboard</span>
                        </li>
                        <li className="menu-item">
                            <svg width="28" height="28" fill="none">
                                <use href={`${svgSprite}#icon-order-icon`}></use>
                            </svg>
                            <span className="menu-text">Order</span>
                        </li>
                        <li className="menu-item">
                            <svg width="28" height="28" fill="none">
                                <use href={`${svgSprite}#icon-help-icon`}></use>
                            </svg>
                            <span className="menu-text">Help</span>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar