import React, {useMemo, useState} from "react";
import GameElement from "../GameElement/GameElement";
import {generateRandomNumber} from "../../Utils/generateRandomNumber";

interface CollectGameElementProps{
  positionX: number;
  positionY: number;
  onClickCollectElement: () => void;
}

const CollectGameElement: React.FC<CollectGameElementProps> = ({
  onClickCollectElement,
  positionY,
  positionX,
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const randomHeight = useMemo(()=> generateRandomNumber(30, 60),[]);

  const onCollect = () => {
    setIsVisible(false)
    onClickCollectElement();
  }

  return isVisible ? (
      <GameElement
          width={randomHeight * 2}
          height={randomHeight}
          onClick={onCollect}
          color={"#00FF00"}
          shape={"rectangle"}
          positionX={positionX}
          positionY={positionY}
      />
  ) : (
      <></>
  )
};

export default CollectGameElement;