import logo from "../assets/images/Logo.svg"
import memberIcon from "../assets/images/member-icon.svg"
import dashboardIcon from "../assets/images/dashboard-icon.svg"
import orderIcon from "../assets/images/order-icon.svg"
import helpIcon from "../assets/images/help-icon.svg"


const Sidebar = ({isSidebarVisible, setIsSidebarVisible}) => {

    return (
        <>
            <aside className={`sidebar ${isSidebarVisible ? "open" : ""}`}>
                <div className="logo" >
                    <img src={logo} alt="Logo" onClick={() => setIsSidebarVisible(!isSidebarVisible)}/>
                </div>
                <nav className="nav-bar">
                    <ul>
                        <li className="menu-item">
                            <img className="menu-icon" src={memberIcon} alt="Member Icon" />
                            <span className="menu-text">Member</span>
                        </li>
                        <li className="menu-item active">
                            <img className="menu-icon" src={dashboardIcon} alt="Dashboard Icon" />
                            <span className="menu-text">Dashboard</span>
                        </li>
                        <li className="menu-item">
                            <img className="menu-icon" src={orderIcon} alt="Order Icon" />
                            <span className="menu-text">Order</span>
                        </li>
                        <li className="menu-item">
                            <img className="menu-icon" src={helpIcon} alt="Help Icon" />
                            <span className="menu-text">Help</span>
                        </li>
                    </ul>
                </nav>
            </aside>
        </>
    )
}

export default Sidebar