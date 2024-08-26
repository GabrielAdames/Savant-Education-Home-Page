import React, { useState } from 'react';
import './GradeAndBrowse.css';
import { ElementarySchoolModal, MiddleSchoolModal, HighSchoolModal, BrowseBySubjectModal } from './Modals';

function GradeAndBrowse() {
  const [isElementaryModalOpen, setIsElementaryModalOpen] = useState(false);
  const [isMiddleModalOpen, setIsMiddleModalOpen] = useState(false);
  const [isHighModalOpen, setIsHighModalOpen] = useState(false);
  const [isBrowseModalOpen, setIsBrowseModalOpen] = useState(false);

  return (
    <div className="grade-and-browse">
      <button className="custom-button" onClick={() => setIsElementaryModalOpen(true)}>Elementary School</button>
      <button className="custom-button" onClick={() => setIsMiddleModalOpen(true)}>Middle School</button>
      <button className="custom-button" onClick={() => setIsHighModalOpen(true)}>High School</button>
      <button className="custom-button" onClick={() => setIsBrowseModalOpen(true)}>Browse by Subject</button>

      <ElementarySchoolModal isOpen={isElementaryModalOpen} onRequestClose={() => setIsElementaryModalOpen(false)} />
      <MiddleSchoolModal isOpen={isMiddleModalOpen} onRequestClose={() => setIsMiddleModalOpen(false)} />
      <HighSchoolModal isOpen={isHighModalOpen} onRequestClose={() => setIsHighModalOpen(false)} />
      <BrowseBySubjectModal isOpen={isBrowseModalOpen} onRequestClose={() => setIsBrowseModalOpen(false)} />
    </div>
  );
}

export default GradeAndBrowse;