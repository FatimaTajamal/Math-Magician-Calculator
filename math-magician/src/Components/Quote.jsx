import React, { useState, useEffect } from 'react';
import './Quote.css';

const Quote = () => {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      setQuote(`${data.content} - ${data.author}`);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  return (
    <div className="quote-container">
      <h2>Random Quote</h2>
      <p className="quote-text">{quote}</p>
      <button onClick={fetchQuote} className="refresh-button">
        Refresh Quote
      </button>
    </div>
  );
};

export default Quote;