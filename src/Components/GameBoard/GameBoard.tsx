import React, {useMemo} from "react";
import Css from './GameBoard.module.css'
import {generateUniquePositions, Position} from "../../Utils/generateUniquePositions";

interface GameBoardProps {
  generateGameElements:  (positions: Position[]) => React.ReactNode[]
}

const GameBoard: React.FC<GameBoardProps> = ({
  generateGameElements
}) => {
  const positions = useMemo(() => generateUniquePositions(12), []);

  return (
      <div className={Css.board}>
        {generateGameElements(positions)}
      </div>
  )
}

export default GameBoard