import React, {useMemo} from "react";
import GameElement from "../GameElement/GameElement";
import {generateRandomNumber} from "../../Utils/generateRandomNumber";

interface AvoidGameElementProps{
  positionX: number;
  positionY: number;
  onClickAvoidElement: () => void;
}

const AvoidGameElement: React.FC<AvoidGameElementProps> = ({
  onClickAvoidElement,
  positionX,
  positionY,
}) => {
  const onlySideSize =  useMemo(()=>generateRandomNumber(30, 70), []);
  return (
      <GameElement
          width={onlySideSize}
          height={onlySideSize}
          onClick={onClickAvoidElement}
          color={"#FF0000"}
          shape={"square"}
          positionX={positionX}
          positionY={positionY}
      />
  )
}

export default AvoidGameElement;