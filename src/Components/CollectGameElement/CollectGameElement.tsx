import React, { Component } from "react";
import GameElement from "../GameElement/GameElement";
import { generateRandomNumber } from "../../Utils/generateRandomNumber";

interface CollectGameElementProps {
  positionX: number;
  positionY: number;
  onClickCollectElement: () => void;
}

class CollectGameElement extends Component<CollectGameElementProps> {
  state = {
    isVisible: true,
  };

  randomHeight = generateRandomNumber(30, 60);

  onCollect = () => {
    this.setState({ isVisible: false });
    this.props.onClickCollectElement();
  };

  render() {
    const { isVisible } = this.state;
    const { positionX, positionY } = this.props;

    return isVisible ? (
        <GameElement
            width={this.randomHeight * 2}
            height={this.randomHeight}
            onClick={this.onCollect}
            color={"#00FF00"}
            shape={"rectangle"}
            positionX={positionX}
            positionY={positionY}
        />
    ) : null;
  }
}

export default CollectGameElement;
