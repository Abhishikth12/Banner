import React, { useState, useEffect } from 'react';
import srcimg1 from '../src/assets/img/screen-avtr.gif';


const Banner = () => {
  return (
    <div className="relative flex justify-between items-center h-screen  p-8">
      {/* Left side container for text */}
      <div className="text-right w-1/2">
        <WordAnimation />
        <br />
        <br /> {/* Add some space between lines */}
        <p className="text-gray-200 mb-4 text-xl">Want to be Frontend Expert ?</p>
        <button className="bg-green-500 text-white py-2 px-4 mt-2 rounded text-xl">GET STARTED</button>
      </div>
      <div className="text-left w-1/2">
      <img src={srcimg1} alt="jj"/>
      </div>
    </div>

  );
};

const WordAnimation = () => {
  const words = ['Welcome  ', 'Namasthe', 'Radhe Radhe ', 'Bonjuer'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change the duration as needed

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="text-yellow-500 text-5xl font-bold">
      <Word text={words[currentWordIndex]} />
      <span className="ml-4 text-5xl">Dev !</span>
    </span>
  );
};

const Word = ({ text }) => {
  const [animationClass, setAnimationClass] = useState('');

  useEffect(() => {
    setAnimationClass('animate-word');

    const timeout = setTimeout(() => {
      setAnimationClass('');
    }, 2000); // Change the duration as needed

    return () => clearTimeout(timeout);
  }, [text]);

  return (
    <span className={`word-animation ${animationClass}`}>
      {text.split('').map((letter, index) => (
        <span key={index} style={{ animationDelay: `${index * 50}ms` }}>
          {letter}
        </span>
      ))}
    </span>
  );
};

export default Banner;
