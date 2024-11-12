import { useState } from 'react';
import './index.scss';

const AnimatedLetters = ({ letterClass, strArray, idx }) => {
  const [animatedIndexes, setAnimatedIndexes] = useState([]);

  const handleMouseEnter = (index) => {
    if (!animatedIndexes.includes(index)) {
      setAnimatedIndexes((prev) => [...prev, index]);
    }
  };

  const handleAnimationEnd = (index) => {
    setAnimatedIndexes((prev) => prev.filter((i) => i !== index));
  };

  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + idx} ${
            animatedIndexes.includes(i) ? 'rubber-band-animation' : ''
          }`}
          onMouseEnter={() => handleMouseEnter(i)}
          onAnimationEnd={() => handleAnimationEnd(i)}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

export default AnimatedLetters;
