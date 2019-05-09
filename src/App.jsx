import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

function App(props) {
  return (
    <div className="App">
      <Header logo="sedrftgyh" />
      <Main />
      <Footer />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
          Learn React
      </a>
    </div>
  );
}

export default App;
