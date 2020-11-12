import React from "react";
import { Entity, Scene } from "aframe-react";
import SkyScenePoint from "./SkyScenePoint";
import { Scene as ApiScene } from "./interfaces/scenes";

interface Props {
  scene: ApiScene;
  navigate(path: string): void;
}

const SkyScene = ({ scene, navigate }: Props) => {
  const { backgroundUrl, points } = scene;
  return (
    <Scene cursor={{ rayOrigin: "mouse" }} className="sky_scene">
      <Entity
        primitive="a-sky"
        id="image-360"
        radius="20"
        src={backgroundUrl}
        crossorigin="anonymous"
        animation={{
          fade:
            "property: components.material.material.color; type: color; from: #FFF; to: #000; dur: 300; startEvents: fade",
          fadeback:
            "property: components.material.material.color; type: color; from: #000; to: #FFF; dur: 300; startEvents: animationcomplete__fade"
        }}
      />
      {points.map((point) => (
        <SkyScenePoint key={point.id} point={point} navigate={navigate} />
      ))}
    </Scene>
  );
};

export default SkyScene;
