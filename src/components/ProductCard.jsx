import React from "react";
import RatingCount from "./RatingCount";


// Product Card

const ProductCard = ({item}) => {
    console.log(item)
  return (
    <>
      <div className="product-card">
        <div className="product-img">
          <img src={item.image} alt="Product Card Image" />
          <div className="product-badge">
            <span className="badge">{item.badge}</span>
          </div>
        </div>
        <h4 className="product-title">{item.title}</h4>
        <h5 className="product-subtitle">{item.subtitle}</h5>
        <p className="price">Rs. {item.price}</p>
        <h4 className="description-title">Description</h4>
        <p className="description">
          {item.description}
        </p>
        <div className="ratings">
          <RatingCount count={item.rating}/>
          <span className="ratings-count">115 ratings</span>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
