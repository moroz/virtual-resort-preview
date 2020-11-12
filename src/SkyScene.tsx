import React from "react";
import { Entity, Scene } from "aframe-react";
import SkyScenePoint from "./SkyScenePoint";
import { Scene as ApiScene } from "./interfaces/scenes";
import Sky from "./Sky";

interface Props {
  scene: ApiScene;
  navigate(destination: ApiScene): void;
  children?: any;
}

const SkyScene = ({ scene, navigate, children }: Props) => {
  const { points } = scene;
  return (
    <Scene cursor={{ rayOrigin: "mouse" }} className="sky_scene">
      <Sky scene={scene} />
      {points.map((point) => (
        <SkyScenePoint key={point.id} point={point} navigate={navigate} />
      ))}
      {children}
    </Scene>
  );
};

export default SkyScene;
