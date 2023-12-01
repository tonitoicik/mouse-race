import React, {useEffect, useMemo, useState} from "react";
import GameElement from "../GameElement/GameElement";
import {generateRandomNumber} from "../../Utils/generateRandomNumber";

interface ChangeGameElementProps {
  positionX: number;
  positionY: number;
  onClickAvoidElement: () => void;
  onClickCollectElement: () => void;
}

const ChangeGameElement: React.FC<ChangeGameElementProps> = ({
  onClickCollectElement,
  onClickAvoidElement,
  positionY,
  positionX,
}) => {
  const [isVisible, setIsVisible] = useState(true)
  const [isCollect, setIsCollect] = useState(true)
  const onlySideSize = useMemo(()=>generateRandomNumber(30, 70),[])

  useEffect(() => {
    const toggleBehavior = () => {
      setIsCollect((prevState) => !prevState);
    };

    const intervalId = setInterval(toggleBehavior, generateRandomNumber(1500, 3000));

    return () => clearInterval(intervalId);
  }, []);

  const onCollectClick = () => {
    setIsVisible(false);
    onClickCollectElement();
  }

  const currentElement = isCollect? (
      <GameElement
          width={onlySideSize}
          height={onlySideSize}
          onClick={onCollectClick}
          color={"#00FF00"}
          shape={"circle"}
          positionX={positionX}
          positionY={positionY}
      />
  ) : (
      <GameElement
          width={onlySideSize}
          height={onlySideSize}
          onClick={onClickAvoidElement}
          color={"#FF0000"}
          shape={"circle"}
          positionX={positionX}
          positionY={positionY}
      />
  )
  return isVisible ? (
      <>{currentElement}</>
  ) : (
      <></>
  )
}

export default ChangeGameElement;