import React, { useState } from 'react';
import './NavBar.css';
import LoginModal from './LoginModal'; // Import the LoginModal component

const NavBar = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <nav className="nav-bar">
      <div className="logo">Savant</div>
      <button className="login-button" onClick={openLoginModal}>Log In</button>
      <LoginModal isOpen={isLoginModalOpen} onRequestClose={closeLoginModal} />
    </nav>
  );
};

export default NavBar;