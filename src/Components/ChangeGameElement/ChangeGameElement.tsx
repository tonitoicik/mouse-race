import React, { Component} from "react";
import GameElement from "../GameElement/GameElement";
import { generateRandomNumber } from "../../Utils/generateRandomNumber";

interface ChangeGameElementProps {
  positionX: number;
  positionY: number;
  onClickAvoidElement: () => void;
  onClickCollectElement: () => void;
}

interface ChangeGameElementState {
  isVisible: boolean;
  isCollect: boolean;
}

class ChangeGameElement extends Component<ChangeGameElementProps, ChangeGameElementState> {
  onlySideSize = generateRandomNumber(30, 70);
  toggleInterval: NodeJS.Timeout | null = null;

  constructor(props: ChangeGameElementProps) {
    super(props);
    this.state = {
      isVisible: true,
      isCollect: true,
    };
  }

  componentDidMount() {
    this.startToggleBehavior();
  }

  componentWillUnmount() {
    this.stopToggleBehavior();
  }

  startToggleBehavior() {
    this.toggleInterval = setInterval(this.toggleBehavior, generateRandomNumber(1500, 3000));
  }

  stopToggleBehavior() {
    if (this.toggleInterval) {
      clearInterval(this.toggleInterval);
    }
  }

  toggleBehavior = () => {
    this.setState((prevState) => ({ isCollect: !prevState.isCollect }));
  };

  onCollectClick = () => {
    this.setState({ isVisible: false });
    this.props.onClickCollectElement();
  };

  render() {
    const { isVisible, isCollect } = this.state;
    const { positionX, positionY, onClickAvoidElement } = this.props;

    const currentElement = isCollect ? (
        <GameElement
            width={this.onlySideSize}
            height={this.onlySideSize}
            onClick={this.onCollectClick}
            color={"#00FF00"}
            shape={"circle"}
            positionX={positionX}
            positionY={positionY}
        />
    ) : (
        <GameElement
            width={this.onlySideSize}
            height={this.onlySideSize}
            onClick={onClickAvoidElement}
            color={"#FF0000"}
            shape={"circle"}
            positionX={positionX}
            positionY={positionY}
        />
    );

    return isVisible ? <>{currentElement}</> : null;
  }
}

export default ChangeGameElement;
