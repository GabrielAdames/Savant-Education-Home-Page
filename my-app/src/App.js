import React from 'react';
import './App.css';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import GradeAndBrowse from './GradeAndBrowse';
import EngageExploreExcel from './EngageExploreExcel';
import DrivenByDiscovery from './DrivenByDiscovery'; // Import the new component

function App() {
  return (
    <div className="App">
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <section>
          <GradeAndBrowse />
        </section>
        <section className="center-section">
          <EngageExploreExcel />
        </section>
        <section className="center-section">
          <DrivenByDiscovery /> {/* Add the new section */}
        </section>
      </main>
    </div>
  );
}

export default App;