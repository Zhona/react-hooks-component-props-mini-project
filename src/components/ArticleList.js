import React from "react";
import Article from "./Article"

function ArticleList({ posts }) {
// we have to use posts here instead of destructuring because we passed post in
//the .map as an argument.
    const articles = posts.map((post) => (
      <Article
        key={post.id}
        title={post.title}
        date={post.date}
        preview={post.preview}
        minutes={post.minutes}
      />
    ));
    //each item will be in a <article> which we will pass down into the <main> tag.
    return <main>{articles}</main>;
  }
  

export default ArticleList;
