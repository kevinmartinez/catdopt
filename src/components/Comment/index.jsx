import React from 'react';

function Comment() {
  return (
    <article className="grid-item comment">
      <header className="comment-header">
        <h2 className="comment-heading">Username</h2>
      </header>
      <p className="comment-text">Comment</p>
    </article>
  );
}

export default Comment;
