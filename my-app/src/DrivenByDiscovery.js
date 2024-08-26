// DrivenByDiscovery.js

import React from 'react';
import './DrivenByDiscovery.css';
import SavantDiscovery from './images/savant-discovery.png'; // Ensure the correct file extension

const DrivenByDiscovery = () => {
  return (
    <div className="driven-by-discovery">
      <div className="driven-by-discovery-content">
        <div className="driven-by-discovery-left">
          <h1>Driven by Discovery</h1>
          <p className="driven-by-discovery-description">Our approach is rooted in curiosity and guided by research. Savant combines innovative teaching methods with evidence-based strategies to create a learning experience that is both enjoyable and effective. Students discover new concepts through hands-on problem-solving and creative exploration.</p>
        </div>
        <div className="driven-by-discovery-right">
          <img src={SavantDiscovery} alt="Discovery" className="driven-by-discovery-image" />
        </div>
      </div>
    </div>
  );
};

export default DrivenByDiscovery;