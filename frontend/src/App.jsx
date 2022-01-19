import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio'
import Photography from './components/Photography/Photography';
import Contact from './components/Contact/Contact'
import './app.scss';

function App() {
  return (
    <div className='app'>
      <Navbar/>
      <div className='sections'>
        <Intro/>
        <Portfolio/>
        <Photography/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;