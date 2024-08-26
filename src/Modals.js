import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modals.css'; // Import the CSS file

Modal.setAppElement('#root'); // Set the root element for accessibility

const ElementarySchoolModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Elementary School Modal"
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        width: '100%',
        border: '4px solid #ed6a5a',
      },
    }}
  >
    <h2>Elementary School</h2>
    <p>At the elementary level, Savant focuses on building strong foundational skills in Mathematics, English Language Arts, Science, and basic Social Studies. Our interactive, game-like lessons make learning fun and engaging, helping young learners develop a love for learning from the start. By emphasizing critical thinking and problem-solving from an early age, our courses ensure that students are well-prepared for the academic challenges ahead. With adaptive learning paths tailored to each student’s pace, Savant makes sure no child is left behind, providing a superior, personalized learning experience.</p>
    <button onClick={onRequestClose} className="modal-close-button">Close</button>
  </Modal>
);

const MiddleSchoolModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Middle School Modal"
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        width: '100%',
        border: '4px solid #ed6a5a',
      },
    }}
  >
    <h2>Middle School</h2>
    <p>In middle school, students face more complex subjects like Algebra, Earth Science, and World History. Savant excels at breaking down these challenging topics into manageable, interactive lessons that keep students engaged and motivated. Our courses use real-world examples and practical applications to make abstract concepts easier to understand. With a focus on critical thinking, analytical skills, and preparation for high school, Savant provides the tools and support students need to excel, making us the go-to resource for middle school education.</p>
    <button onClick={onRequestClose} className="modal-close-button">Close</button>
  </Modal>
);

const HighSchoolModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="High School Modal"
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        width: '100%',
        border: '4px solid #ed6a5a',
      },
    }}
  >
    <h2>High School</h2>
    <p>High school students need to master a broad range of subjects, including advanced Mathematics, Chemistry, Physics, English Literature, and U.S. History. Savant offers rigorous, in-depth courses that not only prepare students for exams and college but also foster a deeper understanding of each subject. Our superior curriculum is designed to challenge students while providing the support they need to succeed, with interactive problem-solving, personalized feedback, and college prep resources. By bridging the gap between high school and higher education, Savant ensures that students are not only prepared but confident in their academic abilities.</p>
    <button onClick={onRequestClose} className="modal-close-button">Close</button>
  </Modal>
);

const StartYourJourneyModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // State to track form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    setIsSubmitted(true); // Update state to show success screen
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Start Your Journey Modal"
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: '500px',
          width: '100%',
          backgroundColor: '#ffffff', // Set background color to white
          textAlign: 'center', // Center align text
        },
      }}
    >
      {isSubmitted ? (
        <div>
          <h2 className="custom-modal-header">Sign Up Successful!</h2>
          <p className="modal-description">
            Thank you for signing up. You can now start your journey with Savant.
          </p>
          <button onClick={onRequestClose} className="modal-close-button">Close</button>
        </div>
      ) : (
        <div>
          <h2 className="custom-modal-header">Join Savant for Free</h2>
          <p className="modal-description">
            Unlock your full potential with Savant—your personalized learning companion. By signing up, you'll gain access to a world of interactive lessons, engaging challenges, and a community of learners just like you.
          </p>
          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="start-journey-button">Sign Up</button>
          </form>
          <p className="modal-footer">If you are already a member, close this modal and Log In.</p>
          <button onClick={onRequestClose} className="modal-close-button">Close</button>
        </div>
      )}
    </Modal>
  );
};

const BrowseBySubjectModal = ({ isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Browse By Subject Modal"
    style={{
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: '500px',
        width: '100%',
        border: '4px solid #ed6a5a',
      },
    }}
  >
    <h2>Browse By Subject</h2>
    <p>With Savant, learning is not confined by grade level or traditional classroom boundaries. Our "Browse by Subject" feature allows students to explore a wide range of topics beyond their current school curriculum. Whether they want to dive deep into advanced Mathematics, explore the intricacies of Quantum Physics, or delve into abstract concepts like Philosophy or Artificial Intelligence, Savant offers a rich library of subjects tailored to all interests and skill levels. This flexibility empowers students to pursue their passions, challenge themselves with higher-level content, and discover new areas of knowledge that might not be covered in their regular coursework. With Savant, the journey of learning is personalized, expansive, and truly limitless.</p>
    <button onClick={onRequestClose} className="modal-close-button">Close</button>
  </Modal>
);

export { ElementarySchoolModal, MiddleSchoolModal, HighSchoolModal, StartYourJourneyModal, BrowseBySubjectModal };