import React from 'react';
import './App.css';
import GameBoard from "../Components/GameBoard/GameBoard";
import Timer from "../Components/Timer/Timer";
import WinForm from "../Components/WinForm/WinForm";
import Leaderboard from "../Components/Leaderboard/Leaderboard";
import GameLogic from "../GameLogic/GameLogic";

class App extends React.Component {
  gameLogic: GameLogic;
  state: {
    isGameRunning: boolean;
    finalTime: number;
  };

  constructor(props: any) {
    super(props);
    this.gameLogic = new GameLogic();
    this.state = {
      isGameRunning: false,
      finalTime: 0,
    };
  }

  componentDidMount() {
    this.gameLogic.addObserver(this.handleGameLogicChange);
  }

  componentWillUnmount() {
    this.gameLogic.removeObserver(this.handleGameLogicChange);
  }

  handleGameLogicChange = () => {
    this.setState({
      isGameRunning: this.gameLogic.isGameRunning,
      finalTime: this.gameLogic.finalTime,
    });
  };

  handleGameStart = () => {
    this.gameLogic.handleGameStart();
  };

  handleGameFinish = (finalTime: number) => {
    this.gameLogic.onGameFinish(finalTime);
  };

  render() {
    const { isGameRunning, finalTime } = this.state;

    return (
        <div className={"main-wrapper"}>
          {isGameRunning && (
              <div>
                <Timer onGameFinish={this.handleGameFinish} />
                <GameBoard generateGameElements={this.gameLogic.generateGameElements} />
              </div>
          )}
          {this.gameLogic.clickedCounter === 0 &&  (
              <>
                <Leaderboard />
                <WinForm finalTime={finalTime} />
              </>
          )}
          {!isGameRunning && (
              <button className={"boardButton"} onClick={this.handleGameStart}>
                Start game
              </button>
          )}
        </div>
    );
  }
}

export default App;
