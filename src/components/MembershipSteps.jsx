import React from 'react'
import svgSprite from "../assets/images/svg-sprite.svg"

const MembershipSteps = () => {
    return (
        <>
            <section className="membership-steps">
                <h2 className="steps-title">How to be a member</h2>
                <div className="white-card-box steps-box">
                    <div className="step">
                        <div className="step-icon-box">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-login-icon`}></use>
                            </svg>
                        </div>
                        <span className="step-title">Login or Signup</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <svg width="8" height="33" fill='none'>
                            <use href={`${svgSprite}#icon-dot-down-arrow`}></use>
                        </svg>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-member-profile`}></use>
                            </svg>
                        </div>
                        <span className="step-title">Membership in Profile</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <svg width="8" height="33" fill='none'>
                            <use href={`${svgSprite}#icon-dot-down-arrow`}></use>
                        </svg>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-subscription`}></use>
                            </svg>
                        </div>
                        <span className="step-title">Select a Subscription</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <svg width="8" height="33" fill='none'>
                            <use href={`${svgSprite}#icon-dot-down-arrow`}></use>
                        </svg>
                    </div>
                    <div className="step">
                        <div className="step-icon-box">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-payments`}></use>
                            </svg>
                        </div>
                        <span className="step-title">Pay the Bill</span>
                    </div>
                    <div class="step-arrow-mobile">
                        <svg width="8" height="33" fill='none'>
                            <use href={`${svgSprite}#icon-dot-down-arrow`}></use>
                        </svg>
                    </div>
                    <div className="step last-step">
                        <div className="step-icon-box">
                            <svg width="24" height="24" fill='none'>
                                <use href={`${svgSprite}#icon-active-membership`}></use>
                            </svg>
                        </div>
                        <span className="step-title">Get the Membership</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MembershipSteps