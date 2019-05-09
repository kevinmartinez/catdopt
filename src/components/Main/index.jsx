import React from 'react';
import styled from 'styled-components/macro';
import Post from '../Post';

const Button = styled.a`
  /* This renders the buttons above... Edit me! */
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: red;
  color: white;
  border: 2px solid white;
`;

function Main() {
  return (
    <main>
      <h2>Hello My name is MAIN</h2>
      <section>
        <h3>Images</h3>
        <section className="grid">
          <article className="grid-item post">
            <header className="post-header">
              <h2 className="post-heading">Lukas</h2>
              <Button>dsada</Button>
              <span>&#9734;</span>
            </header>
            <figure className="post-img">
              <img src="#" alt="" />
              <figcaption className="post-img-caption">Nice nice Image</figcaption>
            </figure>
            <section className="post-comments">
              {/* TODO: Mock up a comment */}
            </section>
          </article>
          <Post />
        </section>
      </section>
    </main>
  );
}

// Greeting.propTypes = {
// name: PropTypes.string
// };

export default Main;
