import { Scene, ScenePoint } from "../interfaces/scenes";
interface Props {
    point: ScenePoint;
    navigate(destination: Partial<Scene>): void;
}
declare const Teleport: ({ point, navigate }: Props) => JSX.Element;
export default Teleport;
