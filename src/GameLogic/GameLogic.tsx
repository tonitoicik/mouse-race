import React from "react";
import { Position } from "../Utils/generateUniquePositions";
import ChangeGameElement from "../Components/ChangeGameElement/ChangeGameElement";
import CollectGameElement from "../Components/CollectGameElement/CollectGameElement";
import AvoidGameElement from "../Components/AvoidGameElement/AvoidGameElement";

class GameLogic {
  isGameRunning: boolean = false;
  clickedCounter: number = 9;
  finalTime: number = 0;
  private observers: (() => void)[] = [];

  handleAvoidGameElementClick: () => void = () => {
      this.isGameRunning = false;
      this.notifyObservers();
  };

  handleCollectGameElementClick: () => void = () => {
    if (this.clickedCounter === 1) {
      this.clickedCounter -= 1;
      this.isGameRunning = false;
      this.notifyObservers();
    } else {
      this.clickedCounter -= 1;
    }
  };

  handleGameStart: () => void = () => {
    this.clickedCounter = 9;
    this.isGameRunning = true;
    this.finalTime = 0;
    this.notifyObservers();
  };

  generateGameElements: (positions: Position[]) => React.ReactNode[] = (positions) => {
    return [
      ...positions.slice(0, 3).map((position, index) => (
          <ChangeGameElement
              key={`change-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickCollectElement={this.handleCollectGameElementClick}
              onClickAvoidElement={this.handleAvoidGameElementClick}
          />
      )),
      ...positions.slice(3, 9).map((position, index) => (
          <CollectGameElement
              key={`collect-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickCollectElement={this.handleCollectGameElementClick}
          />
      )),
      ...positions.slice(9).map((position, index) => (
          <AvoidGameElement
              key={`avoid-${index}`}
              positionX={position.left}
              positionY={position.top}
              onClickAvoidElement={this.handleAvoidGameElementClick}
          />
      )),
    ];
  };

  onGameFinish(finalTime: number) {
    this.finalTime = finalTime;
    this.notifyObservers();
  }

  addObserver(observer: () => void) {
    this.observers.push(observer);
  }

  removeObserver(observer: () => void) {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers() {
    for (const observer of this.observers) {
      observer();
    }
  }
}

export default GameLogic;
