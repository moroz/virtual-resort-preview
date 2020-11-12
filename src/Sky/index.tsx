import React from "react";
import { Entity } from "aframe-react";
import { Scene as ApiScene } from "../interfaces/scenes";

interface Props {
  scene: ApiScene;
}

const Sky = ({ scene }: Props) => {
  return (
    <Entity
      primitive="a-sky"
      id="image-360"
      radius="20"
      src={scene.backgroundUrl}
      crossorigin="anonymous"
      animation={{
        fade:
          "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade",
        fadeback:
          "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
      }}
    />
  );
};

export default Sky;
