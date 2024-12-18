import React from 'react';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Casestudies from './components/Casestudies';
import Process from './components/Process'
import Cta from './components/Cta'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Services />
      <Cta />
      <Casestudies />
      <Process />
      <Team/>
      <Testimonials/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
