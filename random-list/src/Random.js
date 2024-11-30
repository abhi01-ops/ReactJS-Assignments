import React from 'react';

const Random = ({ texts }) => {
  return (
    <div className="random-text">
      <h2>Random Texts</h2>
      <ul>
        {texts.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Random;
