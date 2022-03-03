import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import Experience from './components/Experience/Experience'
import Photography from './components/Photography/Photography';
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
import './app.scss';
import Videography from './components/Videography/Videography';

function App() {
  console.log("Page is " + window.location.href);
  return (
    <div className='app'>
      <Navbar/>
      <div className='sections'>
        <Intro/>
        <Experience/>
        <Photography/>
        <Videography/>
        <Portfolio/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;