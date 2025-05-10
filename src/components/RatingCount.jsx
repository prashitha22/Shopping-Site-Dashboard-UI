import React from "react";
import starIcon from "../assets/images/Star-icon.svg";

const RatingCount = ({ count }) => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <span className="star-icon" key={index}>
          <img
            src={starIcon}
            alt="Star"
            style={{
              filter: index < count ? "none" : "grayscale(100%)",
            }}
          />
        </span>
      ))}
    </>
  );
};

export default RatingCount;
