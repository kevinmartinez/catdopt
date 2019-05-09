import React from 'react';
import Comment from '../Comment';

function Post() {
  return (
    <article className="grid-item post">
      <header className="post-header">
        <h2 className="post-heading">Lukas</h2>
        <span>&#9734;</span>
      </header>
      <figure className="post-img">
        <img src="#" alt="" />
        <figcaption className="post-img-caption">Nice nice Image</figcaption>
      </figure>
      <section className="post-comments">
        <Comment />
      </section>
    </article>
  );
}

export default Post;
