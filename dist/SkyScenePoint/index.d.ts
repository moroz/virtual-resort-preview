import { Scene, ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(destination: Scene): void;
}
declare const SkyScenePoint: ({ point, navigate }: Props) => JSX.Element;
export default SkyScenePoint;
