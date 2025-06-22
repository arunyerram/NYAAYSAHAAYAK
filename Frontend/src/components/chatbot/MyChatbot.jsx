// src/components/Chat1.js

import React, { StrictMode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'react-chatbot-kit/build/main.css';
import Apps from './Apps.jsx';

const MyChatbot = () => {
  const navigate = useNavigate();
  const isLoggedIn = Boolean(sessionStorage.getItem('user'));

  // Redirect to /login if not authenticated
  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <StrictMode>
        <div className="container">
          <div>
            <h1 style={{ color: 'blueviolet' }}>LEGAL ASSISTANT</h1>
          </div>
          <Apps />
        </div>
      </StrictMode>
    </>
  );
};

export default MyChatbot;

