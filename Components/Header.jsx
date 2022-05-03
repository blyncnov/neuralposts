import React from "react";

import Navigation from "../Layout/Navigation";
import Hero from "./Hero_Section";

const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header__max">
          <div className="header__check">
            <div>
              <Navigation />
            </div>
            <div className="header__sep">
              <Hero />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
