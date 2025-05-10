import React from 'react'
import loginIcon from "../assets/images/login-icon.svg"
import memberIcon from "../assets/images/member-profile.svg"
import subscriptionIcon from "../assets/images/subscription.svg"
import paymentIcon from "../assets/images/payments.svg"
import activeMemberIcon from "../assets/images/active-membership.svg"
import dotDownArrow from "../assets/images/dot-down-arrow.svg"

const MembershipSteps = () => {
    return (
        <>
            <section className="membership-steps">
                <h2 className="steps-title">How to be a member</h2>
                <div className="white-card-box steps-box">
                    <div className="step">
                        <div className="step-icon-box">
                            <img src={loginIcon} alt="Login Icon" />
                        </div>
                        <span className="step-title">Login or Signup</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <img src={dotDownArrow} alt="Arrow"/>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <img src={memberIcon} alt="Membership Profile Icon" />
                        </div>
                        <span className="step-title">Membership in Profile</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <img src={dotDownArrow} alt="Arrow"/>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <img src={subscriptionIcon} alt="Subscription Icon" />
                        </div>
                        <span className="step-title">Select a Subscription</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <img src={dotDownArrow} alt="Arrow"/>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <img src={paymentIcon} alt="Payment Icon" />
                        </div>
                        <span className="step-title">Pay the Bill</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <img src={dotDownArrow} alt="Arrow"/>
                    </div>
                    <div className="step last-step">
                        <div className="step-icon-box">
                            <img src={activeMemberIcon} alt="Active Membership Icon" />
                        </div>
                        <span className="step-title">Get the Membership</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MembershipSteps