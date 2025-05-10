import React, { useState } from 'react'
import ProductList from './ProductList'

const ProductSection = () => {

    const [activeTab, setActiveTab] = useState(1);

    const handleTab = (tabId) => {
        setActiveTab(tabId);
    }

    return (
        <>
            <section className="product-section">
                <h2 className="product-title">Shoes</h2>
                <div className="view-all-btn-wrap">
                    <button className="view-all-btn">View All</button>
                </div>
                <div className="tab-wrap">
                    <div className="tab-nav">
                        <ul>
                            <li className={`tab-item ${activeTab === 1 ? "active" : ""}`} onClick={() => handleTab(1)}>
                                <label for="tab-1">Sneakers</label>
                                <div className="product-count-box">
                                    <span>05</span>
                                </div>
                            </li>
                            <li className={`tab-item ${activeTab === 2 ? "active" : ""}`} onClick={() => handleTab(2)}>
                                <label for="tab-1">Sports Shoes</label>
                                <div className="product-count-box">
                                    <span>02</span>
                                </div>
                            </li>
                            <li className={`tab-item ${activeTab === 3 ? "active" : ""}`} onClick={() => handleTab(3)}>
                                <label for="tab-1">Sports Shoes</label>
                                <div className="product-count-box">
                                    <span>03</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        <div className="tab-pane active">
                            <ProductList />
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ProductSection