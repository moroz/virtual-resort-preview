import { ScenePoint, ScenePointType } from "../../types/scenes";
import Teleport from "../Teleport";

interface Props {
  point: ScenePoint;
  navigate(path: string): void;
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
