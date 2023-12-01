import React, { Component } from "react";
import { generateUniquePositions, Position } from "../../Utils/generateUniquePositions";
import Css from './GameBoard.module.css'

interface GameBoardProps {
  generateGameElements: (positions: Position[]) => React.ReactNode[];
}

class GameBoard extends Component<GameBoardProps> {
  positions: Position[] = generateUniquePositions(12);

  render() {
    const { generateGameElements } = this.props;

    return (
        <div className={Css.board}>
          {generateGameElements(this.positions)}
        </div>
    );
  }
}

export default GameBoard;
