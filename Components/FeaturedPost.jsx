import React from "react";
import Image from "next/image";

const FeaturedPost = ({ news }) => {
  console.log(news);
  return (
    <div>
      <div className="FeaturedPost__Container">
        {news.articles.map((post, index) => {
          return (
            <div key={index}>
              <div className="FeaturedPost__Container--box">
                <div className="FeaturedPost__Container--box--image">
                  <Image
                    src="/banner6.jpeg"
                    alt="post"
                    width={1000}
                    height={500}
                  />
                </div>
                <div className="FeaturedPost__Container--box--text">
                  <h6>{post.publishedAt}</h6>
                  <br />
                  <h3>{post.title}</h3>
                  <br />
                  <p>{post.description.slice(0, 250) + " " + "..."}</p>
                </div>
                <div className="FeaturedAuthor__info">
                  <div className="FeaturedAuthor__info--image"></div>
                  <div className="FeaturedAuthor__info--text">
                    <h6>{post.author}</h6>
                    <h6>Growth & Marketing</h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
    </div>
  );
};

export default FeaturedPost;
