import React from 'react';
import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;