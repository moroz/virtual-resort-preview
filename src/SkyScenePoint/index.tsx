import React from "react";
import { Scene, ScenePoint, ScenePointType } from "../interfaces/scenes";
import Teleport from "../Teleport";

interface Props {
  point: ScenePoint;
  navigate(destination: Scene): void;
}

const SkyScenePoint = ({ point, navigate }: Props) => {
  switch (point.pointType) {
    case ScenePointType.Teleport:
      return <Teleport point={point} navigate={navigate} />;
    default:
      return null;
  }
};

export default SkyScenePoint;
