import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupeA">
          <Article
            imgUrl={blog01}
            date={"sep 16,2022"}
            title={"Whats coming next"}
          />
        </div>
        <div className="gpt3__blog-container_groupeB">
          <Article
            imgUrl={blog02}
            date={"sep 16,2022"}
            title={"Whats coming next"}
          />
          <Article
            imgUrl={blog03}
            date={"sep 16,2022"}
            title={"Whats coming next"}
          />
          <Article
            imgUrl={blog04}
            date={"sep 16,2022"}
            title={"Whats coming next"}
          />
          <Article
            imgUrl={blog05}
            date={"sep 16,2022"}
            title={"Whats coming next"}
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
