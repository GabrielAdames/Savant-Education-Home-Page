import React, { useState } from 'react';
import Modal from 'react-modal';
import './Modals.css'; // Import the CSS file

Modal.setAppElement('#root'); // Set the root element for accessibility

const LoginModal = ({ isOpen, onRequestClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Email:', email);
    console.log('Password:', password);
    onRequestClose(); // Close the modal after submission
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Login Modal"
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
          backgroundColor: '#ed6a5a', // Set the background color
          textAlign: 'center', // Center align text
        },
      }}
    >
      <h2 className="modal-header">Log In</h2>
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
        <button type="submit" className="modal-button">Log In</button>
      </form>
      <button onClick={onRequestClose} className="modal-close-button">Close</button>
    </Modal>
  );
};

export default LoginModal;