import React from 'react';
import { ReactDOM } from 'react-dom';
import './styles.css';
import Main from './components/Main.js';
import NavBar from './components/NavBar.js';
import Footer from './components/Footer.js';

export default function App() {
  return (
    <div className="page">
      <div className="page-container">
        <NavBar />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
