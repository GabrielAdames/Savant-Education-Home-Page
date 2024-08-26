// EngageExploreExcel.js

import React from 'react';
import './EngageExploreExcel.css';
import SavantImage from './images/savant-engage.png'; // Ensure the correct file extension

const EngageExploreExcel = () => {
  return (
    <div className="engage-explore-excel">
      <div className="engage-explore-excel-content">
        <div className="engage-explore-excel-left">
          <img src={SavantImage} alt="Engage Explore Excel" className="engage-explore-excel-image" />
        </div>
        <div className="engage-explore-excel-right">
          <h1>Engage Explore Excel</h1>
          <p className="engage-explore-excel-description">Learning with Savant is an adventure! Each lesson is designed to be interactive, engaging, and effective. Through fun challenges and dynamic content, students are encouraged to explore new topics and excel in their studies, all while building a lifelong love for learning.</p>
        </div>
      </div>
    </div>
  );
};

export default EngageExploreExcel;