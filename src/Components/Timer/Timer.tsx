import React, { useState, useEffect } from "react";

interface TimerProps {
  isGameRunning: boolean;
  clickedCounter: number;
  onGameFinish: (finalTime: number) => void
}

const Timer: React.FC<TimerProps> = ({ isGameRunning, clickedCounter, onGameFinish }) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    intervalId = setInterval(() => {
      if (isGameRunning) {
        setTime((prevTime) => prevTime + 1);
      }
    }, 1000);


    return () => {
      clearInterval(intervalId)
    };
  }, [isGameRunning]);

  useEffect(() => {
    if (clickedCounter === 0) {
      onGameFinish(time)
    }
  }, [clickedCounter]);

  return (
      <div>
        <p>Time: {time} seconds</p>
      </div>
  );
};

export default Timer;
