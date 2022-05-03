import React from "react";

const Navigation = () => {
  return (
    <>
      <div className="Navigation__container">
        <div className="Navigation__container--navbar">
          <div className="Navigation__container--columns">
            <div className="Navigation__container--rows">
              <div className="logo">
                <h2>NeuralPost</h2>
              </div>
              <ul className="Navigation__list">
                <li className="Navigation__list--item">Home</li>
                <li className="Navigation__list--item">Blog</li>
                <li className="Navigation__list--item">Giftcards</li>
                <li className="Navigation__list--item">Get Started</li>
              </ul>
              <div className="right">
                <button className="Navigation__btn">Add News</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
