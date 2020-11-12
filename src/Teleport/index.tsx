import React from "react";
import { ScenePoint } from "../interfaces/scenes";
import { Entity } from "aframe-react";

interface Props {
  point: ScenePoint;
  navigate(path: string): void;
}

export default class Teleport extends React.Component<Props> {
  state = {
    hover: false
  };
  onClick = () => {
    const { destination } = this.props.point;
    if (destination) this.props.navigate(`/scenes/${destination.slug}`);
  };
  onMouseEnter = () => {
    this.setState({ hover: true });
  };
  onMouseLeave = () => {
    this.setState({ hover: false });
  };
  render() {
    const { hover } = this.state;
    const { position, rotation } = this.props.point;
    return (
      <Entity
        primitive="a-plane"
        geometry={{
          height: hover ? 1.2 : 1,
          width: hover ? 1.2 : 1
        }}
        color="#ffffff"
        material="shader: flat; src: /goto.png"
        events={{
          click: this.onClick,
          mouseenter: this.onMouseEnter,
          mouseleave: this.onMouseLeave
        }}
        position={position}
        rotation={rotation}
        event-set__click="_target: #image-360; _delay: 300; material.src: ${src}"
        proxy-event="event: click; to: #image-360; as: fade"
        sound="on: click; src: #click-sound"
      />
    );
  }
}
