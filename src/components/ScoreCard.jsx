import React from 'react'
import coinYellow from  "../assets/images/coin-yellow.svg"
import coinGrey from  "../assets/images/coin-grey.svg"
import coinDarkYellow from  "../assets/images/coin-dark-yellow.svg"

const ScoreCard = () => {
    return (
        <>
            <div className="score-card">
                <div className="score-content">
                    <div className="score">
                        <span>1534</span>
                    </div>
                    <div className="score-title">
                        <span>GT Score</span>
                    </div>
                </div>
                <div className="score-coins">
                    <div className="coin-level">
                        <img src={coinYellow} alt="Coin Icon" />
                            <span className="coin-count">01</span>
                    </div>
                    <div className="coin-level">
                        <img src={coinGrey} alt="Coin Icon" />
                            <span className="coin-count">03</span>
                    </div>
                    <div className="coin-level">
                        <img src={coinDarkYellow} alt="Coin Icon" />
                            <span className="coin-count">06</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScoreCard