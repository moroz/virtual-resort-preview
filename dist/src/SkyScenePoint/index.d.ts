/// <reference types="react" />
import { ScenePoint } from "../../types/scenes";
interface Props {
    point: ScenePoint;
    navigate(path: string): void;
}
declare const SkyScenePoint: ({ point, navigate }: Props) => JSX.Element;
export default SkyScenePoint;
