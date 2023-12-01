import React, { Component } from "react";

interface GameElementProps {
  height: number;
  width: number;
  shape: "square" | "circle" | "rectangle";
  color: string;
  positionX: number;
  positionY: number;
  onClick: () => void;
}

class GameElement extends Component<GameElementProps> {
  render() {
    const {
      height,
      width,
      shape,
      color,
      positionX,
      positionY,
      onClick,
    } = this.props;
    const borderRadius = shape === "circle" ? width : 0;

    return (
        <div
            style={{
              height: `${height}px`,
              width: `${width}px`,
              backgroundColor: `${color}`,
              borderRadius: `${borderRadius}px`,
              position: "absolute",
              top: `${positionY}px`,
              left: `${positionX}px`,
            }}
            onClick={onClick}
        ></div>
    );
  }
}

export default GameElement;
