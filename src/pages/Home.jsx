import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import MembershipSteps from '../components/MembershipSteps'
import MembershipBenefits from '../components/MembershipBenefits'
import ScoreCard from '../components/ScoreCard'
import Search from "../components/Search"
import ProductSection from '../components/ProductSection'
import { useState } from 'react'

const Home = () => {

    const [isSidebarVisible, setIsSidebarVisible] = useState(false); // handling sidebar

  return (
    <div className='main-container'>
        <Sidebar isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
        <div className='main-section'>
            <Header isSidebarVisible={isSidebarVisible} setIsSidebarVisible={setIsSidebarVisible}/>
            <div className="main-content">
                    <div className="scorecard-mobile" style={{ display: "none" }}>
                        <ScoreCard />
                    </div>
                <div className="main-left-content">
                    <div className="search-mobile" style={{ display: "none" }}>
                        <Search />
                    </div>
                    <MembershipSteps />
                    <ProductSection />
                </div>
                <div className="main-right-content">
                    <MembershipBenefits />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home