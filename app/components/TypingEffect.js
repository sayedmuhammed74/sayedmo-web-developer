'use client';
import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const typeCharacter = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
        setTimeout(typeCharacter, speed);
      }
    };

    typeCharacter();

    return () => {
      clearTimeout(typeCharacter);
    }; // Cleanup on unmount
  }, [text, speed]);

  return <h1 className="text-4xl font-bold text-blue-600">{displayedText}</h1>;
};

export default TypingEffect;
