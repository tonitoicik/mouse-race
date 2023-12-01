import React, { Component } from "react";
import GameElement from "../GameElement/GameElement";
import { generateRandomNumber } from "../../Utils/generateRandomNumber";

interface AvoidGameElementProps {
  positionX: number;
  positionY: number;
  onClickAvoidElement: () => void;
}

class AvoidGameElement extends Component<AvoidGameElementProps> {
  onlySideSize: number = generateRandomNumber(30, 70);

  render() {
    const { positionX, positionY, onClickAvoidElement } = this.props;

    return (
        <GameElement
            width={this.onlySideSize}
            height={this.onlySideSize}
            onClick={onClickAvoidElement}
            color={"#FF0000"}
            shape={"square"}
            positionX={positionX}
            positionY={positionY}
        />
    );
  }
}

export default AvoidGameElement;