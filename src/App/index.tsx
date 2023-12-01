import React from 'react';
import './App.css';
import GameBoard from "../Components/GameBoard/GameBoard";
import Timer from "../Components/Timer/Timer";
import useGameLogic from "../Hooks/useGameLogic";
import WinForm from "../Components/WinForm/WinForm";
import Leaderboard from "../Components/Leaderboard/Leaderboard";

function App() {
  const {
    finalTime,
    isGameRunning,
    clickedCounter,
    handleGameStart,
    generateGameElements,
    onGameFinish,
  } = useGameLogic();
  
  return (
    <div className={"main-wrapper"}>
      {isGameRunning &&
        <div>
          <Timer isGameRunning={isGameRunning} clickedCounter={clickedCounter} onGameFinish={onGameFinish} />
          <GameBoard generateGameElements={generateGameElements}/>
        </div>
      }
      {finalTime !== 0 &&
        <>
          <Leaderboard />
          <WinForm finalTime={finalTime}/>
        </>
      }
      {!isGameRunning && <button className={"boardButton"} onClick={handleGameStart}>Start game</button>}
    </div>
  );
}

export default App;
