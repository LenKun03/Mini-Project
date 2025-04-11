import React, { useState } from 'react';
import './chatbot.css';
import { useNavigate } from 'react-router-dom';

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hello! How can I assist you with our bookstore today?' }
  ]);
  const [input, setInput] = useState('');
  const navigate = useNavigate();

  const handleSend = () => {
    if (!input.trim()) return;
  
    // Add user message + bot response in one go
    setMessages(prev => [
      ...prev,
      { from: 'user', text: input },
      { from: 'bot', text: `You asked about: "${input}". I’ll get back to you!` }
    ]);
  
    setInput('');
  };
  

  return (
    <div className="chatbot-container">
      <div className="chat-header">
        <h2>🤖 Bookstore AI Assistant</h2>
        <button onClick={() => navigate('/home')} className="back-home">← Back to Store</button>
      </div>
      <div className="chat-window">
        {messages.map((msg, idx) => (
          <div key={idx} className={`chat-msg ${msg.from}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input-area">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
