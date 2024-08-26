import React, { useState } from 'react';
import './HeroSection.css';
import topImage from './images/top-image.svg';
import bottomImage from './images/bottom-image.png';
import { StartYourJourneyModal } from './Modals'; // Import the modal component

const HeroSection = () => {
  const [isJourneyModalOpen, setIsJourneyModalOpen] = useState(false); // State to control modal visibility

  return (
    <div className="hero-section">
      <div className="left-column">
        <h1>Unleash Your<span className="highlight">Inner Genius</span></h1>
        <p className="description">Discover and master new skills with interactive lessons that are both fun and effective. Dive into a world of learning where knowledge meets creativity.
        </p>
        <button className="start-button" onClick={() => setIsJourneyModalOpen(true)}>Start Your Journey</button> {/* Update button */}
      </div>
      <div className="right-column">
        <img src={topImage} alt="Top Image" className="top-image" />
        <img src={bottomImage} alt="Bottom Image" className="bottom-image" />
      </div>
      <StartYourJourneyModal isOpen={isJourneyModalOpen} onRequestClose={() => setIsJourneyModalOpen(false)} /> {/* Render modal */}
    </div>
  );
};

export default HeroSection;