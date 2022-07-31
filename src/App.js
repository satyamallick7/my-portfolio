import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import components

const App = () => {
  return <div>
    <Header />
    <Hero/>
    <About />
    <Skills />
    <Portfolio />
    <Contact />
    <Footer />
  </div>;
};

export default App;
