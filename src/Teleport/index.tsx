import React, { useState } from "react";
import { ScenePoint } from "../../types/scenes";
import { Entity } from "aframe-react";

interface Props {
  point: ScenePoint;
  navigate(path: string): void;
}

const Teleport = ({ point, navigate }: Props) => {
  const [hover, setHover] = useState(false);
  const { position, rotation, destination } = point;
  const onClick = () => {
    if (destination) navigate(`/scenes/${destination.slug}`);
  };
  const onMouseEnter = () => {
    setHover(true);
  };
  const onMouseLeave = () => {
    setHover(false);
  };
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
        click: onClick,
        mouseenter: onMouseEnter,
        mouseleave: onMouseLeave
      }}
      position={position}
      rotation={rotation}
      event-set__click="_target: #image-360; _delay: 300; material.src: ${src}"
      proxy-event="event: click; to: #image-360; as: fade"
      sound="on: click; src: #click-sound"
    />
  );
};

export default Teleport;
