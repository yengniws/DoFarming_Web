import React, { useState } from 'react';

const Routainex = () => {
  const [activeButton, setActiveButton] = useState('morning');

  const handleButtonClick = (buttonType) => {
    setActiveButton(buttonType);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleButtonClick('morning')} className={activeButton === 'morning' ? 'active' : ''}>
          아침
        </button>
        <button onClick={() => handleButtonClick('evening')} className={activeButton === 'evening' ? 'active' : ''}>
          저녁
        </button>
        <button onClick={() => handleButtonClick('health')} className={activeButton === 'health' ? 'active' : ''}>
          건강
        </button>
        <button onClick={() => handleButtonClick('mood')} className={activeButton === 'mood' ? 'active' : ''}>
          기분
        </button>
      </div>

      <div>
        {activeButton === 'morning' && (
          <>
            <div>아침1</div>
            <div>아침2</div>
            <div>아침3</div>
            <div>아침4</div>
          </>
        )}

        {activeButton === 'evening' && (
          <>
            <div>저녁1</div>
            <div>저녁2</div>
            <div>저녁3</div>
            <div>저녁4</div>
          </>
        )}

        {activeButton === 'health' && (
          <>
            <div>건강1</div>
            <div>건강2</div>
            <div>건강3</div>
            <div>건강4</div>
          </>
        )}

        {activeButton === 'mood' && (
          <>
            <div>기분1</div>
            <div>기분2</div>
            <div>기분3</div>
            <div>기분4</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Routainex;

