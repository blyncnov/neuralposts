import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="hero__text">
        <h1>Hello , Welcome To My Blog 👋</h1>
        <br />
        <h4>
          Taiwo Boluwatife (blyncnov) blog, amet consectetur adipisicing elit. Odio quod
          recusandae iste alias quasi natus aspernatur officiis ipsum. Soluta
          quibusdam nemo tempore perferendis magnam sapiente non aspernatur,
          ipsa aliquid ducimus!
        </h4>
      </div>
      <Link href="/ninmc">
        <a>
          <button className="Hero__btn">Get Started</button>
        </a>
      </Link>
    </>
  );
};

export default Hero;
