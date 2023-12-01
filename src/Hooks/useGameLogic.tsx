import { useState } from 'react';
import ChangeGameElement from "../Components/ChangeGameElement/ChangeGameElement";
import {Position} from "../Utils/generateUniquePositions";
import CollectGameElement from "../Components/CollectGameElement/CollectGameElement";
import AvoidGameElement from "../Components/AvoidGameElement/AvoidGameElement";

const useGameLogic = () => {
  const [isGameRunning, setIsGameRunning] = useState(false);
  const [clickedCounter, setClickedCounter] = useState(9);
  const [finalTime, setFinalTime] = useState(0);
  
  const handleAvoidGameElementClick = () => {
    if (isGameRunning) {
      setIsGameRunning(false);
    }
  };

  const handleCollectGameElementClick = () => {
      setClickedCounter((prevState) => prevState - 1);
  };

  const handleGameStart = () => {
    setClickedCounter(9);
    setIsGameRunning(true);
    setFinalTime(0);
  };

  const generateGameElements = (positions: Position[]) => {
    return [
      ...positions.slice(0, 3).map((position, index) => (
          <ChangeGameElement
              key={`change-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickCollectElement={handleCollectGameElementClick}
              onClickAvoidElement={handleAvoidGameElementClick}
          />
      )),
      ...positions.slice(3, 9).map((position, index) => (
          <CollectGameElement
              key={`collect-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickCollectElement={handleCollectGameElementClick}
          />
      )),
      ...positions.slice(9).map((position, index) => (
          <AvoidGameElement
              key={`avoid-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickAvoidElement={handleAvoidGameElementClick}
          />
      )),
    ];
  };
  
  const onGameFinish = (time: number) => {
    setFinalTime(time);
    setIsGameRunning(false);
  }
  
  return {
    finalTime,
    isGameRunning,
    clickedCounter,
    handleAvoidGameElementClick,
    handleCollectGameElementClick,
    handleGameStart,
    onGameFinish,
    generateGameElements,
  };
};

export default useGameLogic;
