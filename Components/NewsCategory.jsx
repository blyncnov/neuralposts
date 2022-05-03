import React from "react";
import FeaturedPost from "./FeaturedPost";

const NewsCategory = () => {
  return (
    <>
      <div className="NeuralPost__Constraint">
        <div className="Category__Container">
          <div className="Category__Container--columns">
            <ul className="Category__list">
              <li>Latest</li>
              <li>Company News</li>
              <li>Tutorials</li>
              <li>Product Updates</li>
              <li>Engineering & Design</li>
            </ul>
          </div>
        </div>
        <FeaturedPost />
      </div>
    </>
  );
};

export default NewsCategory;
