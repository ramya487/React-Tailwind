import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Analytics from "./Analytics"
import Newsletter from './Newsletter';
import Pricing from './Pricing';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Hero></Hero>
      <Analytics></Analytics>
      <Newsletter></Newsletter>
      <Pricing></Pricing>
      <Footer></Footer>
    </div>
  );
}

export default App;
