import React from "react";
import FeaturedPost from "./FeaturedPost";

const NewsCategory = ({ news }) => {
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
        <FeaturedPost news={news} />
      </div>
    </>
  );
};

export default NewsCategory;
