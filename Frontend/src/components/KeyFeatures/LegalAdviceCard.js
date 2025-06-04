// LegalAdviceCard.js

import React from 'react';
import './css/LegalAdviceCard.css';

const LegalAdviceCard = ({ title, content, date }) => {
  return (
    <div className="legal-advice-card">
      <h2>{title}</h2>
      <p>{content}</p>
      <p className="date">{date}</p>
    </div>
  );
};

export default LegalAdviceCard;
