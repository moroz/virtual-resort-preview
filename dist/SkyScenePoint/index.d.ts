import { ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(path: string): void;
}
declare const SkyScenePoint: ({ point, navigate }: Props) => JSX.Element;
export default SkyScenePoint;
