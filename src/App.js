import React from 'react';
import Header from './Header';
import About from './About';
import Application from './Application';
import Support from './Support';
import Footer from './Footer';
import 'normalize.css';
import './app.css';

function App() {
  return (
    <>
      <Header />
      <About />
      <Application />
      <Support />
      <Footer />
    </>
  );
}

export default App;
