import React from 'react';
import { useNavigate } from 'react-router-dom';
import './collegeCutoff.css';

const cutoffData = [
  { college: 'Indian Institute of Science', city: 'Bengaluru', rank: '1' },
  { college: 'Jawaharlal Nehru University', city: 'New Delhi', rank: '2' },
  { college: 'Jamia Millia Islamia', city: 'New Delhi', rank: '3' },
  { college: 'Manipal Academy of Higher Education', city: 'Manipal', rank: '4' },
  { college: 'Banaras Hindu University', city: 'Varanasi', rank: '5' },
];

const CollegeCutoffs = () => {
  const navigate = useNavigate();

  return (
    <div className="cutoff-container">
      <h2>🎓 College Cutoff List</h2>
      <table className="cutoff-table">
        <thead>
          <tr>
            <th>College</th>
            <th>City</th>
            <th>Rank</th>
          </tr>
        </thead>
        <tbody>
          {cutoffData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.college}</td>
              <td>{item.city}</td>
              <td>{item.rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-home" onClick={() => navigate('/home')}>← Back to Store</button>
    </div>
  );
};

export default CollegeCutoffs;
