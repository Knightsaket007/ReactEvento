import React, { useState, useEffect } from 'react';

const Timmer = ({ initialMinutes, onFinish }) => {
  const [seconds, setSeconds] = useState(initialMinutes * 60);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds(seconds - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [seconds, onFinish]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;

    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  return (
    <div>
      <p>{formatTime(seconds)}</p>
    </div>
  );
};

export default Timmer;
