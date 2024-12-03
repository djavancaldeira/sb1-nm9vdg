import React from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero';
import LeadCapture from './components/LeadCapture/LeadCapture';
import TrustElements from './components/TrustElements';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <Hero />
        <LeadCapture />
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <TrustElements />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;