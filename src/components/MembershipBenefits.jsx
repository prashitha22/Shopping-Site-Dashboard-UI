import React from 'react'
import articleImg from "../assets/images/article-img.svg"
import starIcon from "../assets/images/Star-icon.svg"

const MembershipBenefits = () => {
    return (
        <>
            <article>
                <h3 className="article-title">Get the Membership &
                    Never Pay Full Price Again</h3>
                <div className="memebership-features-box">
                    <div className="article-img-wrap">
                        <img src={articleImg} alt="article Image" />
                    </div>
                    <div className="article-content">
                        <h4 className="benefits-title">Benefits</h4>
                        <ul>
                            <li className="article-list-item">
                                <img src={starIcon} alt="Star Icon" />
                                    <div className="article-text">
                                        <span className="article-text-subtitle">Member Only Discounts</span>
                                        <p className="article-text-description">Save on every purchase! Enjoy special prices on a wide range of product categories</p>
                                    </div>
                            </li>
                            <li className="article-list-item">
                                <img src={starIcon} alt="Star Icon" />
                                    <div className="article-text">
                                        <span className="article-text-subtitle">Priority Support</span>
                                        <p className="article-text-description">Get all your queries resolved on a priority basis, only for TriBe members</p>
                                    </div>
                            </li>
                            <li className="article-list-item">
                                <img src={starIcon} alt="Star Icon" />
                                    <div className="article-text">
                                        <span className="article-text-subtitle">Early Access to Collections</span>
                                        <p className="article-text-description">Grab the latest products and exclusive collections before everyone else</p>
                                    </div>
                            </li>
                        </ul>
                        <a href="" className="link-text">Learn More</a>
                    </div>
                </div>
            </article>
        </>
    )
}

export default MembershipBenefits