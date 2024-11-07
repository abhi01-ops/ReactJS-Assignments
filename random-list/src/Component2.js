import React from 'react';

const Random = () => {
    const generateRandomText = () => {
      const length = Math.floor(Math.random() * (64 - 8 + 1)) + 8;
      const characters = 'LoremipsumdolorsitametconsectetueadipiscingelitAeneancommodoligulaegetdolor';
      let result = '';
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return result;
    };
  
    const randomTexts = Array.from({ length: 5 }, generateRandomText);
  
    return (
      <div>
        <h2>Random Texts</h2>
        <ul>
          {randomTexts.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Random;