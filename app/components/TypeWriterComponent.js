'use client';
import { Typewriter } from 'react-simple-typewriter';

const TypeWriterComponent = () => {
  return (
    <p className="text-2xl mb-2">
      A
      <span className="text-primary ml-2">
        <Typewriter
          words={['Front End Developer']}
          loop={true}
          cursor
          cursorStyle="_"
          typeSpeed={80}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </span>
    </p>
  );
};

export default TypeWriterComponent;
